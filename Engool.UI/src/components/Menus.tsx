import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Menu,
  Box,
  Pressable,
  HamburgerIcon,
  NativeBaseProvider,
} from 'native-base';

function Menus(): JSX.Element {
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
            <Menu.Item>Add New</Menu.Item>
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
