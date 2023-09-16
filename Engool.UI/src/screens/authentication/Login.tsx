import {Button, StyleSheet, View} from 'react-native';

function LoginScreen({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => navigation.navigate('Sentence')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
export default LoginScreen;
