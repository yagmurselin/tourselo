import React from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

const SocialButton = ({ onPress, buttonText, buttonColor, iconName }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        width: width * 0.25,
        height: height * 0.06,
        backgroundColor: buttonColor,
        borderRadius: width * 0.015,
      }}>
      <View
        style={{
          width: width * 0.25,
          height: height * 0.06,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: buttonColor,
          borderRadius: width * 0.015,
        }}>
        <Icon name={iconName} size={width * 0.04} color='#fafafa' />
        <Text
          style={{
            color: '#fafafa',
            fontSize: RFValue(12, 630),
            marginLeft: width * 0.015,
          }}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { SocialButton };
