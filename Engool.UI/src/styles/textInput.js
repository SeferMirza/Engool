import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    smoothTextInput: {
        borderRadius: 20,
        borderColor: 'rgba(220, 220, 220, 0.7)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width/2.5,
        height: width/8.5,
        paddingHorizontal: 15,
        margin: 5,
    },
    noRestrictionsSmoothTextInput: {
        borderRadius: 20,
        borderColor: 'rgba(220, 220, 220, 0.7)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width/2.5,
        margin: 5
    }
});