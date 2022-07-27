import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';
//MAINPAGEDEKİ DESTINATIONS ICIN BU SAYFA
const { width, height } = Dimensions.get('window');

export const Attractions = ({ text, source, prices }) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={source} style={styles.imageStyle}></Image>
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          fontWeight: 'bold',
          alignSelf: 'center',
          justifyContent: 'flex-end',
        }}>
        {text}
      </Text>
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
    height: height * 0.35,
    width: width * 0.4,
    borderRadius: 10,
  },
};
