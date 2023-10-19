import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './src/screens/header';
// import Form from './src/screens/Form';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Form />  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  }
});
