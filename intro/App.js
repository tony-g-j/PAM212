// 1. import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react'

// 2. Main: Zona de componentes 
export default function App() {
  const[Contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Contador: {Contador}</Text>
      <Button title="Incrementar" onPress={()=>setContador(Contador + 1)}></Button>
      <Button title="Quitar" onPress={()=>setContador(Contador - 1)}></Button>
      <Button title="Reiniciar" onPress={()=>setContador(Contador - Contador)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
