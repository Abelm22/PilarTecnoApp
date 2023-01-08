import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/AppHeader';
import 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Maps = () => {
  return (
    <SafeAreaProvider>
      <Header title='Maps'/>
      <ImageBackground style={{height:HEIGHT, width:WIDTH}} source={require('../assets/images/fondo.jpg')}>

        <View style={styles.viewGrid}> 
            <TouchableOpacity style={styles.buttonGrid}>
                <Text style={styles.textButton}>MAPS</Text>
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



export default Maps;