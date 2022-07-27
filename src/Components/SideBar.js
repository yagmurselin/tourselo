import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from 'react-native-vector-icons/MaterialIcons';
export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => Actions.drawerClose()}>
            <Text style={styles.title}>
              <Icon size={20} name='home' type='Ionicons' color='pink' />
              Home{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => Actions.push('destinations')}>
            <Text style={styles.title}>
              <Icon size={22} name='star' text='Trip' type='SimpleLineIcons' />
              Destinations{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => Actions.page3()}>
            <Text style={styles.title}>
              <Icon size={22} name='settings-sharp' type='Ionicons' /> Settings{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => Actions.pop('login')}>
            <Text style={styles.title}>
              <Icon size={22} name='log-out' type='Ionicons' /> Log Out{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    height: 30,
    width: '100%',
    marginTop: 15,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: 'pink',
    alignItems: 'stretch',
  },
});
