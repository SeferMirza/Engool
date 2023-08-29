import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function TopBar(props: any): JSX.Element {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight / 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.3,
  },
});

export default TopBar;
