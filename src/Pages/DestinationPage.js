import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RFValue } from 'react-native-responsive-fontsize';
import { Countries } from '../Components/Countries';
import Icon from 'react-native-vector-icons/Octicons';

const { width, height } = Dimensions.get('window');
class DestinationPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../Images/beach.jpg')}
          style={{
            flex: 1,
          }}>
          <View
            style={{
              width: width,
              height: height * 0.14,
              backgroundColor: 'transparent',
            }}>
            <Icon
              style={{ alignSelf: 'flex-start', marginLeft: 10, marginTop: 5 }}
              size={30}
              name='chevron-left'
              text='Back'
              type='Octions'
              color='#038FAB'
              onPress={() => Actions.pop('main')}
            />
            <Text
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                fontSize: RFValue(25, 630),
                fontWeight: 'bold',
                color: '#038FAB',
              }}>
              Destinations
            </Text>
          </View>
          <View
            style={{
              width: width,
              height: height * 0.06,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <TextInput
              style={styles.textInputstyle}
              placeholder='Search..'
              placeholderTextColor='#FFFFFF'
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              width: width,
              height: height * 0.8,
              backgroundColor: 'transparent',
            }}>
            <View style={styles.viewStyle}>
              <TouchableOpacity onPress={() => Actions.push('italy')}>
                <Countries
                  text='Greece'
                  prices=' $2400'
                  source={require('../Images/greece.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.push('italy')}>
                <Countries
                  text='Norway'
                  prices=' $2000'
                  source={require('../Images/norway.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewStyle}>
              <TouchableOpacity onPress={() => Actions.push('italy')}>
                <Countries
                  text='Finland'
                  prices=' $2500'
                  source={require('../Images/kuzey_isiklari.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.push('italy')}>
                <Countries
                  text='Italy'
                  prices=' $1700'
                  source={require('../Images/rome.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewStyle}>
              <TouchableOpacity onPress={() => Actions.push('turkey')}>
                <Countries
                  text='Turkey'
                  prices=' $700'
                  source={require('../Images/pamukkale.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.push('italy')}>
                <Countries
                  text='Greece'
                  prices=' $1000'
                  source={require('../Images/greece.jpg')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewStyle}>
              <TouchableOpacity onPress={() => Actions.push('italy')}>
                <Countries
                  text='London'
                  prices=' $3000'
                  source={require('../Images/londoneye.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.push('italy')}>
                <Countries
                  text='Rio De Janeiro'
                  prices=' $1500'
                  source={require('../Images/rio.jpg')}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textInputstyle: {
    paddingLeft: width * 0.03,
    width: width * 0.8,
    height: height * 0.06,
    backgroundColor: '#2E75A0',
    opacity: 0.25,
    borderRadius: width * 0.15,
    borderColor: '#FFFFFF',
    borderWidth: width * 0.003,
    textAlignVertical: 'center',
    fontSize: RFValue(11, 630),
    color: 'white',
  },
});

export default DestinationPage;
