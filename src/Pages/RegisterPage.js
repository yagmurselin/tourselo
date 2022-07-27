import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

class RegisterPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../Images/paris1.1.jpg')}
          style={{ flex: 1 }}>
          <View
            style={{
              width: width,
              height: height * 0.18,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <Text
              style={{
                fontSize: RFValue(25, 630),
                fontWeight: '600',
                color: '#FFFFFF',
              }}>
              TOURSELO
            </Text>
            <Text
              style={{
                fontSize: RFValue(16, 630),
                fontWeight: '200',
                color: '#FFFFFF',
              }}>
              We stay for you.
            </Text>
          </View>
          <View
            style={{
              width: width,
              height: height * 0.1,
              justifyContent: 'flex-start',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextInput
              placeholder='FIRST NAME'
              placeholderTextColor='#FFFFFF'
              style={{
                paddingLeft: width * 0.03,
                width: width * 0.4,
                height: height * 0.06,
                backgroundColor: 'transparent',
                borderRadius: width * 0.015,
                borderColor: '#FFFFFF',
                borderWidth: width * 0.002,
                textAlignVertical: 'center',
                fontSize: RFValue(11, 630),
                borderRightWidth: 0.5,
              }}
            />
            <TextInput
              placeholder='LAST NAME'
              placeholderTextColor='#FFFFFF'
              style={{
                paddingLeft: width * 0.03,
                width: width * 0.4,
                height: height * 0.06,
                backgroundColor: 'transparent',
                borderRadius: width * 0.015,
                borderColor: '#FFFFFF',
                borderWidth: width * 0.002,
                fontSize: RFValue(11, 630),
                borderLeftWidth: 0.5,
              }}
            />
          </View>
          <View
            style={{
              width: width,
              height: height * 0.4,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <TextInput
              placeholder='EMAIL ADRESS'
              placeholderTextColor='#FFFFFF'
              style={{
                paddingLeft: width * 0.03,
                width: width * 0.8,
                height: height * 0.06,
                backgroundColor: 'transparent',
                borderRadius: width * 0.015,
                borderColor: '#FFFFFF',
                borderWidth: width * 0.003,
                textAlignVertical: 'center',
                fontSize: RFValue(11, 630),
                color: 'white',

              }}
            />

            <TextInput
              placeholder='MOBILE NUMBER'
              placeholderTextColor='#FFFFFF'
              style={{
                paddingLeft: width * 0.03,
                width: width * 0.8,
                height: height * 0.06,
                backgroundColor: 'transparent',
                borderRadius: width * 0.015,
                borderColor: '#FFFFFF',
                borderWidth: width * 0.002,
                textAlignVertical: 'center',
                fontSize: RFValue(11, 630),
                color: 'white',
              }}
            />
            <TextInput
              placeholder='PASSWORD'
              placeholderTextColor='#FFFFFF'
              
              style={{
                paddingLeft: width * 0.03,
                width: width * 0.8,
                height: height * 0.06,
                backgroundColor: 'transparent',
                borderRadius: width * 0.015,
                borderColor: '#FFFFFF',
                borderWidth: width * 0.003,
                textAlignVertical: 'center',
                fontSize: RFValue(11, 630),
                color: 'white',

              }}
            />
            <TextInput
              placeholder='CONFIRM PASWORD'
              placeholderTextColor='#FFFFFF'
              secureTextEntry
              style={{
                paddingLeft: width * 0.03,
                width: width * 0.8,
                height: height * 0.06,
                backgroundColor: 'transparent',
                borderRadius: width * 0.015,
                borderColor: '#FFFFFF',
                borderWidth: width * 0.003,
                textAlignVertical: 'center',
                fontSize: RFValue(11, 630),
                color: 'white',

              }}
            />

            <Pressable
              onPress={() => Actions.pop('main')}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#212121' : '#000',
                  width: width * 0.8,
                  height: height * 0.06,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  borderRadius: width * 0.015,
                },
              ]}>
              <Text
                style={{
                  width: width * 0.8,
                  textAlign: 'center',
                  fontSize: RFValue(13, 630),
                  fontWeight: '200',
                  color: '#FFFFFF',
                }}>
                REGISTER
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: width,
              height: height * 0.32,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: RFValue(16, 630),
                fontWeight: '200',
                color: '#FFFFFF',
              }}>
              By clicking Register, you accept our {'\n'} Terms of Use and
              Privacy Policy
            </Text>
            <Text
              onPress={() => Actions.pop('login')}
              style={{
                fontSize: RFValue(16, 730),
                fontWeight: '100',
                color: '#FFFFFF',
                marginTop: width * 0.08,
              }}>
              You've already have an account?{' '}
              <Text style={{ fontWeight: 'bold' }}> Login!</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default RegisterPage;
