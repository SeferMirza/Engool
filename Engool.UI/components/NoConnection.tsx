/*
array boş gelince bumluyor o düzeltilecek
*/

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function NoConnection(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <View>
          <Text style={styles.status}>No Connection</Text>
        </View>
        <View>
          <Text style={styles.desc}>Try to reload page</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  middle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#251012',
  },
  desc: {
    fontSize: 14,
  },
  row: {},
  column: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default NoConnection;
