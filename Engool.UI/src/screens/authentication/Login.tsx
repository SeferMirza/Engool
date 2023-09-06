import {Button, StyleSheet, Text, View} from 'react-native';

function LoginScreen({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>sa</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
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
