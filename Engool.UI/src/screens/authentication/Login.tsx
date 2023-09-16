import {Button, View} from 'react-native';

function LoginScreen({navigation}: any): JSX.Element {
  return (
    <View style={layoutStyles.container}>
      <Button title="Login" onPress={() => navigation.navigate('Sentence')} />
    </View>
  );
}

const layoutStyles = require('../../styles/layout');

export default LoginScreen;
