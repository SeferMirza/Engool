import React from 'react';
import WordPage from './src/screens/WordPage';
import AuthenticationContainer from './src/screens/authentication/AuthenticationContainer';

const Page = __DEV__ ? WordPage : AuthenticationContainer;

function App(): JSX.Element {
  return <Page />;
}

export default App;
