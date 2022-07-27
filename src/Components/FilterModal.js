import React, { Component } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';
import { CheckBox } from 'react-native-elements';

import { filterClicked } from '../Redux/Actions/FilterActions';


const { width, height } = Dimensions.get('window');
class FilterModal extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
  
    return (
      <View style={styles.centeredView}>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Icon
            style={{ alignSelf: 'flex-end', justifyContent: 'flex-start' }}
            size={22}
            name='x'
            text='x'
            type='Feather'
            onPress={() => Actions.pop()}
          />
              
              <CheckBox
            checked={this.state.checked}
            style={{justifyContent:'flex-end'}}
            onPress={() => this.setState({ checked: !this.state.checked })}
          />
             
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
      
const mapToStateProps = ({FilterResponse}) => {
  const {showModal} = FilterResponse;
  return{
    showModal
  };
}
 export default  connect(mapToStateProps,{filterClicked})(FilterModal);