import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  modalContainer: {
    width: width * 0.8,
    height: height * 0.8,
    top: (height * 0.2) / 2,
    bottom: (height * 0.2) / 2,
    backgroundColor: 'rgba(0, 0, 0, 0)', // transparent
    left: (width * 0.2) / 2,
    right: (width * 0.2) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
