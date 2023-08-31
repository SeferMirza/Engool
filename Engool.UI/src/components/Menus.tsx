import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {
  Menu,
  Box,
  Pressable,
  HamburgerIcon,
  NativeBaseProvider,
} from 'native-base';

import {postWord} from '../utils/requests';

function Menus(): JSX.Element {
  const addWord = async () => {
    try {
      postWord({
        engText: 'Game',
        trText: 'Oyun',
        engSentence: 'I want to play game',
        trSentence: 'Oyun oynamak istiyorum',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Box h="100%" w="100%" alignItems="flex-start" style={styles.test}>
          <Menu
            shadow={3}
            w="150"
            trigger={triggerProps => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}>
                  <HamburgerIcon style={styles.icon} />
                </Pressable>
              );
            }}>
            <Menu.Item>Practice</Menu.Item>
            <Menu.Item>Statistics</Menu.Item>
            <Menu.Item>
              <TouchableOpacity onPressOut={addWord}>
                <Text>Add New Word</Text>
              </TouchableOpacity>
            </Menu.Item>
          </Menu>
        </Box>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  test: {
    width: '10%',
    height: '100%',
  },
  icon: {
    height: 45,
    width: 35,
  },
});

export default Menus;
