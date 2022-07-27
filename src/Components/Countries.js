import React, { Component } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Countries = ({ source, text, prices }) => {
  return (
    <ImageBackground
      source={source}
      imageStyle={{ borderRadius: 10 }}
      style={styles.imageStyle}>
      <View style={{ justifyContent: 'center', alignSelf: 'center', }}>
        <Text
          style={{
            fontSize: 10,
            color: '#86EAFE',
            fontWeight: 'bold',
            alignSelf:'center',
          }}>
          {text}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: '#86EAFE',
            fontWeight: 'bold',
            alignSelf:'center',

          }}>
          starting budget
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: '#86EAFE',
            fontWeight: 'bold',
            alignSelf:'center',

          }}>
          {prices}
        </Text>
      </View>
    </ImageBackground>
  );
};
const styles = {
  containerStyle: {
    //borderWidth:1,
    height: height * 0.2,
    width: width * 0.4,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 2,
    marginRight: 2,
    
    
    
    
  },
  imageStyle: {
    height: height * 0.2,
    width: width * 0.4,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent:'center',
    margin:7
  },
};
