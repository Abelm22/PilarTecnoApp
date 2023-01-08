import React from 'react';
import { StyleSheet, TouchableOpacity, View  } from 'react-native';
import { Header as HeaderRNE, Icon } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { appActions } from '../redux/appRedux';

const AppHeader = (props) => {
    const {title='Pilar Tecno', rightComponent, leftComponent} = props
    const dispatch = useDispatch()
    const setLogout = ()=>{
      dispatch(appActions.setUser(false))
  
    }
  return (
    <HeaderRNE  
      leftComponent={leftComponent?leftComponent:null}
      rightComponent={rightComponent?rightComponent:
        (
          <View style={styles.headerRight} >
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              /*onPress={Login}*/
            >
              <Icon type="antdesign" name="rocket1" color="white" onPress={()=>setLogout()}/>
            </TouchableOpacity>
          </View>
        )
      }
      centerComponent={{ text: title, style: styles.heading }}
    />   
  )
};



const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b4cca',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
    heading: {
      color: 'white',
      fontSize: 30,
      fontFamily: 'PocketMonk',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },
    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
});



export default AppHeader;