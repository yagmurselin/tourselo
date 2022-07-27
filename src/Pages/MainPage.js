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
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RFValue } from 'react-native-responsive-fontsize';
import { Themes } from '../Components/Themes';
import { Destinations } from '../Components/Destinations';
import { filterClicked } from '../Redux/Actions/FilterActions';

const { width, height } = Dimensions.get('window');
class MainPage extends Component {
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
              height: height * 0.1,
            }}>
            <Text
              style={{
                marginTop:10,
                alignSelf: 'center',
                textAlignVertical:'top',
                fontSize: RFValue(25, 630),
                fontWeight: '600',
                color: '#038FAB',
              }}>
              TOURSELO
            </Text>
          </View>
          <View
            style={{
              width: width,
              height: height * 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <TextInput
              placeholder='Search..'
              placeholderTextColor='#FFFFFF'
              style={{
                paddingLeft: width * 0.03,
                width: width * 0.7,
                height: height * 0.06,
                backgroundColor: '#2E75A0',
                opacity: 0.25,
                borderRadius: width * 0.15,
                borderColor: '#FFFFFF',
                borderWidth: width * 0.003,
                textAlignVertical: 'center',
                fontSize: RFValue(11, 630),
                color: 'white',
              }}
            />
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ height: height * 0.2 }}>
            <Themes
              text='Adventure'
              source={require('../Images/Adventure.jpg')}
            />
            <Themes text='Family' source={require('../Images/family.jpg')} />
            <Themes text='Winter' source={require('../Images/ski.jpg')} />
            <Themes
              text='Honeymoon'
              source={require('../Images/honeymoon.jpg')}
            />
            <Themes
              text='Festival'
              source={require('../Images/festival.jpg')}
            />

            <Themes text='Cultural' source={require('../Images/giza.jpg')} />
            <Themes text='Wedding' source={require('../Images/wedding.jpg')} />
          </ScrollView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{
              width: width,
              height: height * 0.6,
              backgroundColor: 'transparent',
            }}>
            <Destinations
              text='Greece'
              prices=' $2400'
              source={require('../Images/greece.jpg')}
            />
            <Destinations
              text='Norway'
              prices=' $2000'
              source={require('../Images/norway.jpg')}
            />
            <Destinations
              text='Finland'
              prices=' $2500'
              source={require('../Images/kuzey_isiklari.jpg')}
            />
            <Destinations
              text='Italy'
              prices=' $1700'
              source={require('../Images/rome.jpg')}
            />
            <Destinations
              text='Turkey'
              prices=' $700'
              source={require('../Images/pamukkale.jpg')}
            />
            <Destinations
              text='Greece'
              prices=' $1000'
              source={require('../Images/greece.jpg')}
            />
            <Destinations
              text='London'
              prices=' $3000'
              source={require('../Images/londoneye.jpg')}
            />
            <Destinations
              text='Rio De Janeiro'
              prices=' $1500'
              source={require('../Images/rio.jpg')}
            />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const mapToStateProps = ({FilterResponse}) => {
  const {showModal} = FilterResponse;
  return{
    showModal
  };
}
 export default  connect(mapToStateProps,{filterClicked})(MainPage);