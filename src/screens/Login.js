import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import 'react-native-gesture-handler';
import { appActions } from '../redux/appRedux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Login = () => {
  const dispatch = useDispatch()
  const setAuth = ()=>{
    dispatch(appActions.setUser({name:'user', lastname:'user'}))

  }

  return (
    <SafeAreaProvider>
      <ImageBackground style={{height:HEIGHT, width:WIDTH}} source={require('../assets/images/fondo.jpg')}>

        <View style={styles.viewGrid}> 
            <TouchableOpacity style={styles.buttonGrid}>
                <Text style={styles.textButton} onPress={()=>setAuth()}>LOGIN</Text>
            </TouchableOpacity>     
        </View>
    
      </ImageBackground>  
    </SafeAreaProvider>
  )
};



const styles = StyleSheet.create({
  textButton:{
    justifyContent:'center',
    color:'white',
    fontSize:20,
    fontWeight:'900',

  },
  viewGrid: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  buttonGrid:{
    elevation:3,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff0000',
    width:WIDTH*.4,
    height:WIDTH*.15,
    borderRadius:40,


  },

});



export default Login;