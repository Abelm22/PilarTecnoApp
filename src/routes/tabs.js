import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Maps from '../screens/Maps';
import Lists from '../screens/Lists';
import ListDetail from '../screens/ListDetail';
import Tasks from '../screens/Tasks';
import { Icon } from '@rneui/themed';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeScreens = () => {
    

  return(
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Tasks" component={Tasks}/>
    </HomeStack.Navigator>
  );
}



const ListStack = createStackNavigator();

const ListScreens = () => {
    

  return(
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Lists" component={Lists}/>
      <HomeStack.Screen name="Detail" component={ListDetail}/>
    </HomeStack.Navigator>
  );
}




const Tab = createMaterialBottomTabNavigator();

const PRIMARY_COLOR = '#3b4cca';

export const Tabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: PRIMARY_COLOR, height: '8%' }}>
      <Tab.Screen name="Casa" component={HomeScreens}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <Icon 
            name='home'
            type='font-awesome-5'
            color='#517fa4' />
        ),}}/>
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <Icon 
            name='user'
            type='font-awesome-5'
            color='#517fa4' />
        ),}}/>
      <Tab.Screen name="Lists" component={ListScreens}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
              <Icon 
              name='list'
              type='font-awesome-5'
              color='#517fa4' />
        ),}}/>
      <Tab.Screen name="Maps" component={Maps}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <Icon 
            name='map'
            type='font-awesome-5'
            color='#517fa4' />
        ),}}/>
      
    </Tab.Navigator>
  );
}