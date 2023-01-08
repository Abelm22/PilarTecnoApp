import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet,FlatList, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/AppHeader';
import 'react-native-gesture-handler';
import { appActions } from "../redux/appRedux";
import { useDispatch } from "react-redux";
import api, {IMG_URL} from '../services/api';
import { ListItem, Avatar, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const Lists = () => {
  const dispatch = useDispatch();
  const [pokemons, setPokemons] = useState(null);
  const [next, setNext] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState(null);

  useEffect(()=>{
    getPokemons()
  },[])

  const getPokemonImgId = (id) => {
    console.log('long. '+id.length)
    switch (id.length) {
      case 1:
      return `00${id}`
      case 2:
      return `0${id}`
      default:
      return id
    }
  } 


const navigation = useNavigation();
const navigateTo = (route)=> {
    navigation.navigate(route)

}  

const keyExtractor = (item, index)=>index.toString()

const renderItem = ({item}) =>{
    const path = item.url.split('/')
    const imgID = getPokemonImgId(path[6])
  return(
    <ListItem bottomDivider onPress={()=>navigateTo('listDetail')}>
      <Avatar title={item.name} source={{uri:`${IMG_URL}${imgID}.png`}}/>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )}
  
const renderFooter =()=>{
  return(
    <View style={{width:'100%', height:120}}>
      <Button disabled={false} title='Load More' onPress={()=>loadMore()}/>
    </View>
    
  )
}


const getPokemons = async () => {
  try {
    //dispatch(appActions.loading(true))
    const result = await api.GET(api.pokemons)
    if(result){
      console.log('poke: ', result)
      setPokemons(result.results)
      setNext(result.next)
    }
    } catch (error) {
      console.log(error)
    } finally {
    dispatch(appActions.loading(false))

  }
}


const loadMore = async () => {
  try {
    //dispatch(appActions.loading(true))
    const result = await api.GET(next)
    if(result){
      console.log('poke: ', result)
      setPokemons(prev=>[...prev, ...result.results])
      setNext(result.next)
    }
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(appActions.loading(false))
  }
}

return (
  <SafeAreaProvider>
    <Header title='Pokedex'/>
      <FlatList
        keyExtractor={keyExtractor}
        data={pokemons}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
      />        
  </SafeAreaProvider>
)
};









export default Lists;