import React from 'react';
import { StyleSheet, Text, View, Image,FlatList } from 'react-native';
import ProfileItems from '../Components/ProfileItems'

export default function Profile () {    
    return (
      <View style={styles.container}>
          <Image
            style={{height:200}}
            source={{uri:require('../assets/profile.jpg')}}
          />
          <ProfileItems name="username" value="Samira Faizi"/>
          <ProfileItems name="Gmail" value="SamiraFaizi@gmail.com"/>
          <ProfileItems name="Gender" value="Famale"/>
          <ProfileItems name="Mobile" value="27873857289"/>
          <ProfileItems name="Address" value="Herat-Afghanistan"/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex:1
    }
});