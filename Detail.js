import React from 'react';
import {StyleSheet,Text,View,Image,Button,ScrollView} from 'react-native';

import {Rating} from 'react-native-ratings'

import {useRoute} from '@react-navigation/native'
export default function Detail(){
        const {name,image,price,detail} =useRoute().params
    return (
        <ScrollView style={StyleSheet.Cotainer}>
            <Image
                style={{height:190}}
                source={{uri:image}}
            />
            <View>
                <Text style={Styles.title}>{name}</Text>
                <Text style={Styles.title}>Price:{price}</Text>
                <Rating showRating imageSize={30}/>
            </View>
            <View style={{margin:8}}>
                <Text style={Styles.title}>Introduction</Text>
                <Text>{detail}</Text>
            </View>
            <Button
                 title="Add to favorite"
                 color="#777777"
            />
        </ScrollView>
    );
}
const Styles=StyleSheet.create({
    container:{
        flex:1
    },
    title:{
         textAlign:"center",
         fontWeight:"bold",
         fontSize:18,
         marginTop:8
    }
})

