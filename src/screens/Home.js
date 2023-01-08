import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/AppHeader';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Tasks from '../screens/Tasks';
import Profile from '../screens/Profile';
import Lists from '../screens/Lists';
import Maps from '../screens/Maps';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Home = () => {
    const navigation = useNavigation();
    const navigateTo = (route)=> {
        navigation.navigate(route)

    }

  return (
    <SafeAreaProvider>
      <Header/>
      <ImageBackground style={{height:HEIGHT, width:WIDTH}} source={require('../assets/images/fondo.jpg')}>
        <View style={{flex:1}} >

          <View style={{flexDirection:'row',flex:1}}>
            <View style={{...styles.viewGrid, justifyContent:'flex-end', paddingBottom:'5%'}}>
              <TouchableOpacity style={styles.buttonGrid} onPress={()=>navigateTo(Tasks)}>
                <Text style={styles.textButton}>TASKS</Text>
              </TouchableOpacity>  
            </View>

            <View style={{...styles.viewGrid, justifyContent:'flex-end', paddingBottom:'5%'}}>
              <TouchableOpacity style={styles.buttonGrid} onPress={()=>navigateTo(Profile)}>
                <Text style={styles.textButton}>PROFILE</Text>
              </TouchableOpacity> 
            </View>
          </View>

          <View style={{flexDirection:'row',flex:1}}>
            <View style={{...styles.viewGrid, justifyContent:'flex-start', paddingTop:'5%'}}>
              <TouchableOpacity style={styles.buttonGrid} onPress={()=>navigateTo(Lists)}>
                <Text style={styles.textButton}>LISTS</Text>
              </TouchableOpacity> 
            </View>

            <View style={{...styles.viewGrid, justifyContent:'flex-start', paddingTop:'5%'}}>
              <TouchableOpacity style={styles.buttonGrid} onPress={()=>navigateTo(Maps)}>
                <Text style={styles.textButton}>MAP</Text>
              </TouchableOpacity>  
            </View>
          </View>

        </View>
      </ImageBackground>  
    </SafeAreaProvider>
  )
};



const styles = StyleSheet.create({
  textButton:{
    justifyContent:'center',
    color:'white',
    fontSize:50,
    fontWeight:'650',
    fontFamily:'PocketMonk',
    
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
    width:WIDTH*.45,
    height:WIDTH*.45,
    borderRadius:40,
    opacity:0.91,
  },
  sectionContainer:{
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight:'600',
  },
  sectionDescription:{
    marginTop: 8,
    fontSize: 18,
    fontWeight:'400',
  },
  highlight:{
    fontWeight:'700',
  },

});



export default Home;