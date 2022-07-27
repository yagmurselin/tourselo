import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Themes = ({text, source}) => {
  return (
   <View style={styles.containerStyle}>
     <Image source = {source} style = {styles.imageStyle}></Image>
     <Text style = {{fontSize:10,fontWeight: 'bold', color:'white'}}>
       {text}
   </Text>
   </View>
  )
}
const styles= {
  containerStyle:{
// borderWidth:1,
    height: height*0.20,
    width:width*0.20,
    alignItems:'center'
  },
  imageStyle:{
    borderWidth:1,
    height:height*0.1,
    width: width*0.16,
    borderRadius:40,
    
  }
}
