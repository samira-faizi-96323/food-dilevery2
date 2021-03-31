import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
 import FavoriteItems from '../Components/FavriteItems'

export default function Favorite() {
    
    const foods=[
      {id:"1",image: require("../assets/bg.jpg"),  name:"Burger", price:"10$",detail:"very deleciouse food kjhfkljfkdjowIOJAF"},
      {id:"2",image: require("../assets/bolani.jpg"),  name:"Pizza", price:"20$", detail:"very deleciouse food kjhfkljfkdjowIOJAFfjeoiiergoiergujiojkjiojkfnkfsjierojgosj"},
      {id:"3",image: require("../assets/eggs.jpg"),  name:"eggs",price:"30$", detail:"very deleciouse food kjhfkljfkdjowIOJAFhrjfhiusgiuijfkhgtuifjkiughuiriousjkhfkjs"},
      {id:"4",image: require("../assets/pizza.jpg"),  name:"pizza", price:"40$", detail:"very deleciouse food kjhfkljfkdjowIOJAFreuuighuiytruihfkjhiughtruiwrihjhjkfiueiusjkhsjki"},
    ]
  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={({item})=>{
            return <FavoriteItems name={item.name} image={item.image} price={item.price}/>
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
