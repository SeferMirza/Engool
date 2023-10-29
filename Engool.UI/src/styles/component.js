import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ComponentStyles = StyleSheet.create({
  againButton: {
    alignSelf: 'flex-start',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  okayButton: {
    alignSelf: 'flex-end',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smoothTextInput: {
    borderRadius: 20,
    borderColor: 'rgba(220, 220, 220, 0.7)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2.5,
    height: width / 8.5,
    paddingHorizontal: 15,
    margin: 5,
  },
  noRestrictionsSmoothTextInput: {
    borderRadius: 20,
    borderColor: 'rgba(220, 220, 220, 0.7)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2.5,
    margin: 5,
  },
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

export default ComponentStyles;
