import React, { useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/AppHeader';
import 'react-native-gesture-handler';
import { Input, Button, Icon } from '@rneui/themed';
import { CheckBox } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { appActions, appSelector } from '../redux/appRedux';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Tasks = () => {
  const dispatch = useDispatch()
  const todo = useSelector(appSelector.todo)
  const [text, setText] = useState('')
  const handleChange = (e)=>{
    setText(e)
  }
  const addTask = ()=>{
    dispatch(appActions.addTodo({text: text, id: todo.length + 1 }))
    setText('')
  }
  const handleChecked = (e, id)=>{
    dispatch(appActions.setCompletedTodo({id, completed: e}))
  }
  const delTask = (id)=>{
    dispatch(appActions.deleteTodo(id))
  }

  return (
    <SafeAreaProvider>
      <Header title='Tasks'/>
      <ImageBackground style={{height:HEIGHT, width:WIDTH}} source={require('../assets/images/fondo.jpg')}>

        <View style={styles.viewGrid}>
          <View style={{flex:1, width:WIDTH, marginTop:10, alignItems:'center'}}>
            <Input
              placeholder='New Task'
              value={text}
              onChangeText={(e)=>handleChange(e)}
              backgroundColor='white'
            />   
            <Button radius={'sm'}  type="solid" color="#3b4cca" buttonStyle={styles.button} onPress={()=>addTask()}>
              Save
              <Icon name="save" color="white" />
            </Button>
          </View> 
          <View style={styles.taskList}>
            
              {todo.map((t, index)=>
              <View key={t.id} style={{flexDirection:'row', justifyContent:'space-around'}}>
                <CheckBox
                  checked={t.completed}
                  onPress={() => handleChecked(!t.completed, t.id)}
                />
                <Text key={t.id} style={styles.textButton}>{t.text}</Text>
                <Button title='delete' onPress={()=>delTask(t.id)}/>
              </View>
              )}
               
          </View>


          
          
        </View>
    
      </ImageBackground>  
    </SafeAreaProvider>
  )
};



const styles = StyleSheet.create({
  viewGrid: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  textButton:{
    color:'white',
    fontSize:30,
    fontWeight:'20',
    marginLeft:10,
    marginRight:10,
  },
  button:{
    borderRadius: 30,
    width: 120,
    height: 50,
    opacity:0.91,
  },
  taskList:{
    flex:4,
    width:WIDTH, 
    marginTop:10, 
    alignItems:'flex-start', 
    backgroundColor:'#3b4cca', 
    opacity:0.91,
  },
  
});



export default Tasks;