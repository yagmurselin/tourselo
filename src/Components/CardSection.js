import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return <View style={styles.subContainerStyle}>{props.children}</View>;
};
const styles = {
  subContainerStyle: {
    marginTop: 20,
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    height: 230,
    borderRadius: 15,
    width: 325,
    alignSelf: 'center',
  },
};
export { CardSection };
