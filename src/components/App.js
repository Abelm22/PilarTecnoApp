import React from 'react';
import 'react-native-gesture-handler';
import { Icon, Stack } from '@rneui/themed';
import { AppStack } from '../routes/app';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Home from '../screens/Home';
import { Provider } from 'react-redux';
import store from '../redux/store'

const App = () => {
  return (
    <Provider store={store}>
       <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </Provider>
      
    
    
  );
}




export default App;