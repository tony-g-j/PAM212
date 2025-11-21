import { View, Text, StyleSheet } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de perfil</Text>
      <Text style = { styles.txt} >Usando Nativigation Stack </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  txt:{
    fontSize: 18,
    color:'#015795ff',
    textShadowRadius:6,
    textShadowColor:'#5106ffff'
  }
});