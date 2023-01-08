import React, {useState,useEffect} from 'react';
import { Text, View, StyleSheet,FlatList, Dimensions, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/AppHeader';
import 'react-native-gesture-handler';
import { appActions } from "../redux/appRedux";
import { useDispatch } from "react-redux";
import api, {IMG_URL} from '../services/api';
import { ListItem, Avatar, Button } from '@rneui/themed';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const ListDetail = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(null);

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









return (
  <SafeAreaProvider>
    <Header title='Pokedex'/>
      <Text>Detail</Text>
  </SafeAreaProvider>
)
};









export default ListDetail;