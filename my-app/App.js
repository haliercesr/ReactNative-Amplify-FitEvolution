import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BIENVENIDO!!</Text>
      <Text>Nombre de usuario</Text>
      <TextInput style={styles.inputLogin}/>
      <Text>Contraseña</Text>
      <TextInput style={styles.inputLogin}/>
      <StatusBar style="auto" />
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
  inputLogin:{
    borderColor: 'red',
    backgroundColor: 'grey',
  }
});
