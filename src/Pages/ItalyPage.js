import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RFValue } from 'react-native-responsive-fontsize';
import { CardSection } from '../Components/CardSection';
import Icon from 'react-native-vector-icons/Octicons';
import Item from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
class ItalyPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignSelf: 'center',
        }}>
        <ImageBackground
          source={require('../Images/beach.jpg')}
          style={{
            flex: 1,
          }}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View
              style={{
                width: width,
                height: height * 0.1,
              }}>
              <Icon
                style={{ alignSelf: 'baseline', marginLeft: 5, marginTop: 5 }}
                size={30}
                name='chevron-left'
                text='Back'
                type='Octions'
                color='pink'
                onPress={() => Actions.pop()}
              />
              <Text
                style={{
                  justifyContent: 'flex-start',
                  alignSelf: 'center',
                  textAlignVertical: 'top',
                  fontSize: RFValue(25, 630),
                  fontWeight: '600',
                  color: 'pink',
                }}>
                ITALY
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
              style={{ height: height * 0.8 }}
              showsVerticalScrollIndicator={false}>
              <CardSection>
                <ImageBackground
                  style={styles.imageStyle}
                  source={require('../Images/italian_food.jpg')}>
                  <View
                    style={styles.absoluteFillObject}
                    backgroundColor='rgba(0,0,0,0.4)'>
                    <Icon
                      style={{
                        alignSelf: 'flex-end',
                        marginTop: 5,
                        marginRight: 5,
                      }}
                      size={30}
                      name='heart'
                      text='Back'
                      type='Octions'
                      color='pink'></Icon>
                  </View>
                </ImageBackground>
                <View>
                  <Text
                    style={styles.startingStyle}>
                    {' '}
                    starting from{' '}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={styles.insideTextStyle}>
                      {' '}
                      $1499
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 11,
                      }}>
                      {' '}
                      per Person on twin sharing{' '}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: 230 }}>
                      {' '}
                      Amsterdam{' '}
                      <Item
                        style={{
                          alignSelf: 'flex-end',
                        }}
                        size={18}
                        name='arrowright'
                        text='Back'
                        type='Antdesign'
                        color='black'></Item>{' '}
                      Greece{' '}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Ionicons
                        size={18}
                        name='airplane-outline'
                        text='Back'
                        type='Ionicons'></Ionicons>
                      <Ionicons
                        size={18}
                        name='car-outline'
                        text='Back'
                        type='Ionicons'></Ionicons>
                      <Ionicons
                        size={18}
                        name='bed-outline'
                        text='Back'
                        type='Ionicons'></Ionicons>
                      <Ionicons
                        size={15}
                        name='md-restaurant-outline'
                        text='Back'
                        type='Ionicons'></Ionicons>
                      <Text style={{ fontWeight: 'bold', paddingRight: 1 }}>
                        {' '}
                        +4{' '}
                      </Text>
                    </View>
                  </View>
                </View>
              </CardSection>
              <CardSection>
                <ImageBackground
                  style={styles.imageStyle}
                  source={require('../Images/efes.jpg')}>
                  <View
                    style={styles.absoluteFillObject}
                    backgroundColor='rgba(0,0,0,0.4)'>
                    <Icon
                      style={{
                        alignSelf: 'flex-end',
                        marginTop: 5,
                        marginRight: 5,
                      }}
                      size={30}
                      name='heart'
                      text='Back'
                      type='Octions'
                      color='pink'></Icon>
                  </View>
                </ImageBackground>
                <View>
                  <Text
                   style={styles.startingStyle}>
                    {' '}
                    starting from{' '}
                  </Text>
                  <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text
                      style={styles.insideTextStyle}>
                      {' '}
                      $1499
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 11,
                      }}>
                      {' '}
                      per Person on twin sharing{' '}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: 230 }}>
                      {' '}
                      İzmir{' '}
                      <Item
                        style={{
                          alignSelf: 'flex-end',
                        }}
                        size={18}
                        name='arrowright'
                        text='Back'
                        type='Antdesign'
                        color='black'></Item>{' '}
                      Muğla{' '}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Ionicons
                        size={18}
                        name='airplane-outline'
                        text='Back'
                        type='Ionicons'></Ionicons>
                      <Ionicons
                        size={18}
                        name='car-outline'
                        text='Back'
                        type='Ionicons'></Ionicons>
                      <Ionicons
                        size={18}
                        name='bed-outline'
                        text='Back'
                        type='Ionicons'></Ionicons>
                      <Ionicons
                        size={15}
                        name='md-restaurant-outline'
                        text='Back'
                        type='Ionicons'></Ionicons>
                      <Text style={{ fontWeight: 'bold' }}> +4 </Text>
                    </View>
                  </View>
                </View>
              </CardSection>
              <CardSection>
                <ImageBackground
                  style={styles.imageStyle}
                  source={require('../Images/venice.jpeg')}>
                  <View
                    style={styles.absoluteFillObject}
                    backgroundColor='rgba(0,0,0,0.4)'>
                    <Icon
                      style={{
                        alignSelf: 'flex-end',
                        marginTop: 5,
                        marginRight: 5,
                      }}
                      size={30}
                      name='heart'
                      text='Back'
                      type='Octions'
                      color='pink'></Icon>
                  </View>
                </ImageBackground>
                <View>
                  <Text
                    style={styles.startingStyle}>
                    {' '}
                    starting from{' '}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={styles.insideTextStyle}>
                      {' '}
                      $2099
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 11,
                      }}>
                      {' '}
                      per Person on twin sharing{' '}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ width: 230 }}>
                      {' '}
                      Venice{' '}
                      <Item
                        style={{
                          alignSelf: 'flex-end',
                        }}
                        size={18}
                        name='arrowright'
                        text='Back'
                        type='Antdesign'
                        color='black'></Item>{' '}
                      Pisa{' '}
                    </Text>

                    <Ionicons
                      size={18}
                      name='airplane-outline'
                      text='Back'
                      type='Ionicons'></Ionicons>
                    <Ionicons
                      size={18}
                      name='car-outline'
                      text='Back'
                      type='Ionicons'></Ionicons>
                    <Ionicons
                      size={18}
                      name='bed-outline'
                      text='Back'
                      type='Ionicons'></Ionicons>
                    <Ionicons
                      size={15}
                      name='md-restaurant-outline'
                      text='Back'
                      type='Ionicons'></Ionicons>
                    <Text style={{ fontWeight: 'bold' }}> +4 </Text>
                  </View>
                </View>
              </CardSection>
              <CardSection>
                <ImageBackground
                  style={styles.imageStyle}
                  source={require('../Images/pisa.jpg')}>
                  <View
                    style={styles.absoluteFillObject}
                    backgroundColor='rgba(0,0,0,0.4)'>
                    <Icon
                      style={{
                        alignSelf: 'flex-end',
                        marginTop: 5,
                        marginRight: 5,
                      }}
                      size={30}
                      name='heart'
                      text='Back'
                      type='Octions'
                      color='pink'></Icon>
                  </View>
                </ImageBackground>
                <View>
                  <Text
                    style={styles.startingStyle}>
                    {' '}
                    starting from{' '}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={styles.insideTextStyle}>
                      {' '}
                      $2499
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 11,
                      }}>
                      {' '}
                      per Person/ including Maneskin concert{' '}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: 230 }}>
                      {' '}
                      Paris{' '}
                      <Item
                        style={{
                          alignSelf: 'flex-end',
                        }}
                        size={18}
                        name='arrowright'
                        text='Back'
                        type='Antdesign'
                        color='black'></Item>{' '}
                      Rio de Janeiro
                      <Item
                        style={{
                          alignSelf: 'flex-end',
                        }}
                        size={18}
                        name='arrowright'
                        text='Back'
                        type='Antdesign'
                        color='black'></Item>{' '}
                      Pisa{' '}
                    </Text>

                    <Ionicons
                      size={18}
                      name='airplane-outline'
                      text='Back'
                      type='Ionicons'></Ionicons>
                    <Ionicons
                      size={18}
                      name='car-outline'
                      text='Back'
                      type='Ionicons'></Ionicons>
                    <Ionicons
                      size={18}
                      name='bed-outline'
                      text='Back'
                      type='Ionicons'></Ionicons>
                    <Ionicons
                      size={15}
                      name='md-restaurant-outline'
                      text='Back'
                      type='Ionicons'></Ionicons>
                    <Text style={{ fontWeight: 'bold' }}> +4 </Text>
                  </View>
                </View>
              </CardSection>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'absolute',
    height: 160,
    borderRadius: 15,
    width: 325,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  absoluteFillObject: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  insideTextStyle: {
    color: 'black',
    alignSelf: 'flex-end',
    fontWeight: '900',
    fontSize: 16,
    marginLeft: 2,
  },
  startingStyle:{
    color: 'green',
    fontWeight: 'bold',
    marginLeft: 2,
    marginTop: 155,
    fontSize: 12,
  }
});
export default ItalyPage;
