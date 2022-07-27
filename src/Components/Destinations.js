import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';
//MAINPAGEDEKİ DESTINATIONS ICIN BU SAYFA
const { width, height } = Dimensions.get('window');

export const Destinations = ({ text, source, prices }) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={source} style={styles.imageStyle}></Image>
      <Text
        style={{
          fontSize: 14,
          color: 'white',
          fontWeight: 'bold',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        {text}
      </Text>
      <View style={{flexDirection: 'row',
    alignSelf:'center'}}>
        
        <Text
          style={{
            fontSize: 12,
            color: '#038FAB',
            alignSelf: 'flex-start',
            justifyContent: 'center',
          }}>
          {(text = 'starting:')}
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: '#038FAB',
            alignSelf: 'auto',
            fontWeight: 'bold',
            justifyContent: 'center',
          
          }}>
          {prices}
        </Text>
      </View>
    </View>
  );
};
const styles = {
  containerStyle: {
    //borderWidth:1,
    height: height * 0.4,
    width: width * 0.4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 12,
  },
  imageStyle: {
    borderWidth: 1,
    height: height * 0.4,
    width: width * 0.4,
    borderRadius: 10,
  },
};
