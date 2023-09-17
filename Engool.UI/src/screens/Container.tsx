import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './authentication/Login';
import WordScreen from './WordScreen';
import SentenceScreen from './SentenceScreen';

const Stack = createNativeStackNavigator();

function Container(): JSX.Element {
  return <PagesStack />;
}

const PagesStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sentence" component={SentenceScreen} />
        <Stack.Screen name="Word" component={WordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
