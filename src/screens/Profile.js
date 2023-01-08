import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/AppHeader';
import 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { appActions, appSelector } from '../redux/appRedux';
import { useEffect } from 'react';
import { Avatar } from '@rneui/themed';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Profile = () => {
  const user = useSelector(appSelector.user)
  useEffect(()=>{
  })

  
  return (
    <SafeAreaProvider>
      <Header title='Profile'/>
      <ImageBackground style={{height:HEIGHT, width:WIDTH}} source={require('../assets/images/fondo.jpg')}>
        <View style={{alignItems:'center', marginTop:'40%', flex:0.5}}>
          <Avatar
              activeOpacity={0.2}
              containerStyle={{ backgroundColor: "#3b4cca" }}
              rounded
              size="xlarge"
              title="U"
            />
            <View style={styles.viewGrid}> 
              <View style={styles.buttonGrid}>
                  <Text style={styles.textButton}>{user.name} {user.lastname}</Text>
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
    fontSize:40,
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
    backgroundColor:'#3b4cca',
    width:WIDTH*.8,
    height:WIDTH*.2,
    borderRadius:40,


  },

});



export default Profile;