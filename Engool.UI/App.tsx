/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import WordPage from './src/WordPage';
import AuthenticationContainer from './src/authentication/AuthenticationContainer';

const Page = __DEV__ ? WordPage : AuthenticationContainer;

function App(): JSX.Element {
  return <Page />;
}

export default App;
