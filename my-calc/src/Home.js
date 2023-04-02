import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

const App = ()=> {
  const isErr = true;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.texbox}>계산기!</Text>
      <Text style={[styles.texbox, isErr && styles.texterror]}>calc!</Text>
      <Text style={[styles.texterror, styles.texbox]}>calc!</Text>
      <Button title='123button' color='purple' onPress={()=>console.log('click')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texbox: {
    fontSize: 30,
    fontWeight: '700',
    color: 'blue',
    backgroundColor: 'green'
  },
  texterror: {
    color: 'red',
    backgroundColor: 'yellow'
  },
});

export default App;