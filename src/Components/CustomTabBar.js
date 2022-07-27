import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Dimensions } from 'react-native';
import Item from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FilterIcon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { filterClicked } from '../Redux/Actions/FilterActions';
const { width, height } = Dimensions.get('window');
class CustomTabBar extends Component {
  render() {
    return (
      <View style={styles.tabStyle}>
        <TouchableOpacity
          style={{ height: height * 0.1, width: width * 0.25 }}
          onPress={() => Actions.push('main')}>
          <View style={styles.viewStyle}>
            <Item
              style={{ alignSelf: 'center' }}
              size={22}
              name='home'
              text='Home'
              type='Octicons'
              color='pink'
              onPress={() => this.setState({ isActive: 'main' })}
            />
            <Text style={styles.textSyle}> Home </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ height: height * 0.1, width: width * 0.25 }}
          onPress={() => Actions.push('destinations')}>
          <View style={styles.viewStyle}>
            <Icon
              style={{ alignSelf: 'center' }}
              size={22}
              name='star'
              text='Trip'
              type='SimpleLineIcons'
              color='pink'
            />
            <Text style={styles.textSyle}> Trip </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ height: height * 0.1, width: width * 0.25 }}
          onPress={() => this.setState({ isActive: 'heart' })}>
          <View style={styles.viewStyle}>
            <Icon
              style={{ alignSelf: 'center' }}
              size={22}
              name='heart'
              text='Favourites'
              type='SimpleLineIcons'
              color='pink'
            />
            <Text style={styles.textSyle}> Favourites </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ height: height * 0.1, width: width * 0.25 }}
          onPress={() => this.props.filterClicked(true)}>
          <View style={styles.viewStyle}>
            <FilterIcon
              style={{ alignSelf: 'center' }}
              size={22}
              name='filter'
              text='Filter'
              type='AntDesign'
              color='pink'
            />
            <Text style={styles.textSyle}> Filter </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabStyle: {
    alignItems: 'center',
    height: height * 0.1,
    borderTopWidth: 1,
    borderTopColor:'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewStyle: {
    height: height * 0.1,
    width: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSyle:{
    color:'pink',
    fontWeight:'bold',
  }
});
const mapToStateProps = ({ FilterResponse }) => {
  const { showModal } = FilterResponse;
  return {
    showModal,
  };
};
export default connect(mapToStateProps, { filterClicked })(CustomTabBar);
