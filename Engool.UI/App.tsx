import React from 'react';
import {NativeBaseProvider} from 'native-base';

import Container from './src/screens/Container';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <Container />
    </NativeBaseProvider>
  );
}

export default App;
