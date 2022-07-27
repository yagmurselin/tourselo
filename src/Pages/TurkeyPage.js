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
import { Attractions } from '../Components/Attractions';

const { width, height } = Dimensions.get('window');
class GreecePage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../Images/pamukkale.jpg')}
          style={{
            height: height * 0.35,
          }}>
          <View
            style={{
              width: width,
              height: height * 0.14,
              backgroundColor: 'rgba(0,0,0,0.2)',
              flex: 1,
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
                fontSize: 25,
                color: 'white',
                fontWeight: 'bold',
                marginTop: 40,
              }}>
              {' '}
              Turkey{' '}
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 12,
                color: 'white',
              }}>
              8988 Bookings - 188 Agents
            </Text>
            <View style={{ flexDirection: 'column', alignSelf: 'flex-start' }}>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                  marginTop: 35,
                  marginLeft: 5,
                }}>
                Best time to visit
                {'                                                           '}
                starting budget
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}>
                Oct-Mar{'                                                    '}{' '}
                $2499/person
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{ height: height * 0.09, marginLeft: 5 }}>
          <Text style={{ color: 'grey', fontSize: 14, marginTop: 10 }}>
            Top
          </Text>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
            ATTRACTIONS
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Attractions
            source={require('../Images/efes.jpg')}
            text='Selçuk, Izmir'></Attractions>
          <Attractions
            source={require('../Images/bodrum.jpg')}
            text='Bodrum, Muğla'></Attractions>
          <Attractions
            source={require('../Images/aizonai.jpg')}
            text='Çavdarhisar, Kütahya'></Attractions>

          <Attractions
            source={require('../Images/pamukkale.jpg')}
            text='Pamukkale'></Attractions>
          <Attractions
            source={require('../Images/alanya.jpg')}
            text='Alana, Antalya'></Attractions>
        </ScrollView>
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
});

export default GreecePage;
