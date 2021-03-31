import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import FoodItems from "../Components/FoodItems"

export default function Home() {
    let images=[
        require('../assets/rice.jpg'),
        require('../assets/pizza.jpg'),
    ]
    const foods=[
      {id:"1",image: require("../assets/bg.jpg"),  name:"Burger", price:"10$",detail:"very deleciouse food kjhfkljfkdjowIOJAF"},
      {id:"2",image: require("../assets/bolani.jpg"),  name:"Pizza", price:"20$", detail:"very deleciouse food kjhfkljfkdjowIOJAFfjeoiiergoiergujiojkjiojkfnkfsjierojgosj"},
      {id:"3",image: require("../assets/eggs.jpg"),  name:"eggs",price:"30$", detail:"very deleciouse food kjhfkljfkdjowIOJAFhrjfhiusgiuijfkhgtuifjkiughuiriousjkhfkjs"},
      {id:"4",image: require("../assets/pizza.jpg"),  name:"pizza", price:"40$", detail:"very deleciouse food kjhfkljfkdjowIOJAFhauiyferyjsdhhruieyiu kafkkadkjkjadkljherjffffffffdhajkhiaeufuidhjkhaghriufhjkahuiarehfiuahjkfhfuhraiufhdkjaihui"},
      {id:"5",image: require("../assets/rice.jpg"),  name:"rice", price:"50$", detail:"very deleciouse food kjhfkljfkdjowIOJAFreuuighuiytruihfkjhiughtruiwrihjhjkfiueiusjkhsjki"},
    ]
  return (
    <View style={{flex:1}}>
        <View style={styles.containerImageSlider}>
            <ImageSlider
            style={styles.imageSlider}
            images={images}
            autoPlayWithInterval={2000}
            />
        </View>
        <Text style={styles.text}>categories</Text>
        <FlatList
        numColumns={3}
          data={foods}
          renderItem={({item})=>{
            return <FoodItems name={item.name} price={item.price} image={item.image} detail={item.detail}/>
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    containerImageSlider: {
    height:170,
    margin:8
  },
  imageSlider:{
      borderRadius:10
  },
  text:{
    margin:10,
    fontSize:16,
    fontWeight:"bold"
  }
});
