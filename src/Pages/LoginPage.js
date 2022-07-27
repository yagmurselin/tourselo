import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RFValue } from 'react-native-responsive-fontsize';
import { SocialButton } from '../Components/SocialButton';

const { width, height } = Dimensions.get('window');

class LoginPage extends Component {
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
              height: height * 0.36,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <TextInput
              placeholder='EMAIL ADRESS OR MOBILE NUMBER'
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
              secureTextEntry
              style={{
                paddingLeft: width * 0.03,
                width: width * 0.8,
                height: height * 0.06,
                backgroundColor: 'transparent',
                borderRadius: width * 0.015,
                borderColor: '#FFFFFF',
                borderWidth: width * 0.002,
                fontSize: RFValue(11, 630),
                color: 'white',

              }}
            />
            <Text
              onPress={() => console.log(`Tıklandı`)}
              style={{
                width: width * 0.8,
                textAlign: 'right',
                fontSize: RFValue(13, 630),
                fontWeight: '200',
                color: '#FFFFFF',
              }}>
              Forgot your password?
            </Text>
            <Pressable
              onPress={() => console.log(`tıklandııı`)}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#212121' : '#000',
                  width: width * 0.8,
                  height: height * 0.06,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: width * 0.015,
                },
              ]}>
              <Text
                onPress={() => Actions.push('rightmenu')}
                style={{
                  width: width * 0.8,
                  textAlign: 'center',
                  fontSize: RFValue(13, 630),
                  fontWeight: '200',
                  color: '#FFFFFF',
                }}>
                LOG IN
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: width,
              height: height * 0.46,
              justifyContent: 'flex-start',
              paddingTop: width * 0.02,
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <Text
              style={{
                fontSize: RFValue(22, 630),
                fontWeight: '600',
                color: '#FFFFFF',
              }}>
              OR
            </Text>
            <Text
              style={{
                fontSize: RFValue(16, 630),
                fontWeight: '200',
                color: '#FFFFFF',
                marginTop: width * 0.05,
              }}>
              Login With
            </Text>
            <View
              style={{
                width: width,
                height: height * 0.08,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: height * 0.04,
              }}>
              <SocialButton
                iconName={'logo-facebook'}
                buttonColor={'#1B4F72'}
                buttonText={'FACEBOOK'}
                onPress={() => console.log(`FACEBOOK`)}
              />
              <SocialButton
                iconName={'logo-twitter'}
                buttonColor={'#3498DB'}
                buttonText={'TWITTER'}
                onPress={() => console.log(`TWITTER`)}
              />
              <SocialButton
                iconName={'logo-google'}
                buttonColor={'#B03A2E'}
                buttonText={'GOOGLE+'}
                onPress={() => console.log(`GOOGLE+`)}
              />
            </View>
            <Text
              onPress={() => Actions.push('register')}
              style={{
                fontSize: RFValue(16, 630),
                fontWeight: '200',
                color: '#FFFFFF',
                marginTop: width * 0.18,
              }}>
              New to TOURSELO? Sign up!
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default LoginPage;
