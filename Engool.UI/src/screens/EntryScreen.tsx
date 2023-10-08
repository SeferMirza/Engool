import React, {useState} from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';

function EntryScreen({navigation}: any): JSX.Element {
  const [wordButtonPressStyle, setWordButtonPressStyle] = useState({});
  const [sentenceButtonPressStyle, setSenteceButtonPressStyle] = useState({});

  return (
    <View style={layoutStyles.container}>
      <View style={[layoutStyles.row, styles.row]}>
        <View style={[layoutStyles.col, styles.col]}>
          <Pressable
            onPress={() => {
              navigation.navigate('Word');
            }}
            onPressIn={() => setWordButtonPressStyle(styles.wordButtonPress)}
            onPressOut={() => setWordButtonPressStyle({})}
            style={[
              styles.wordButtonPress,
              wordButtonPressStyle,
              styles.buttons,
            ]}>
            <Text>Word Practice</Text>
          </Pressable>
        </View>
        <View style={[layoutStyles.col, styles.col]}>
          <Pressable
            onPress={() => {
              navigation.navigate('Sentence');
            }}
            onPressIn={() =>
              setSenteceButtonPressStyle(styles.sentenceButtonPress)
            }
            onPressOut={() => setSenteceButtonPressStyle({})}
            style={[sentenceButtonPressStyle, styles.buttons]}>
            <Text>Sentence Practice</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const layoutStyles = require('../styles/layout');
const styles = StyleSheet.create({
  col: {
    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordButtonPress: {},
  sentenceButtonPress: {
    borderLeftWidth: 1,
  },
});

export default EntryScreen;
