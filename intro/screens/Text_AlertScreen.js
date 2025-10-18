import { Text, StyleSheet, View, TextInput, Alert, Button } from "react-native";
import React, { useState } from "react";

export default function Text_AlertScreen() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [comentario, setComentario] = useState('');

  const enviarDatos = () => {
    if (nombre.trim() === '' || contraseña.trim() === '' || comentario.trim() === '') {
      Alert.alert("Error", "Por favor completa los campos");
      alert("Error: por favor completa los campos");
      setMensaje("Faltan campos por llenar");
    } else {
      Alert.alert("Hola ", "bienvenido " + nombre + "!");
      alert("Hola Bienvenido");
      setMensaje("Bienvenido " + nombre + "!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practica TextInput y Alert</Text>
      //input para nombre
      <TextInput
        style={styles.input}
        placeholder='Escribe tu nombre'
        placeholderTextColor='#ffffff'
        value={nombre}
        onChangeText={setNombre}
      />
      //input para contraseña
      <TextInput
         style={styles.input}
        placeholder='Escribe tu contraseña'
        placeholderTextColor='#ffffff'
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry={true}

      />
      //input para comentario de varias lineas
      <TextInput
        style={[styles.input, {height: 100, textAlign: 'top'}]}
        placeholder='Escribe tu comentario'
        placeholderTextColor='#ffffff'
        value={comentario}
        onChangeText={setComentario}
        multiline = {true}
        numberOfLines={4}
      />

      <Button title=' Enviar ' onPress={enviarDatos}/>
      <Text style={styles.mensaje} > {mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000000',
    justifyContent:'center',
    alignItems:'center',
    padding: 30,
    gap: 10
  },
  title:{
     fontSize:25,
    fontWeight:'bold'
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#a47bf7ff',
    color:'#ffffff',
    padding:12,
    borderRadius:9
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#e431f1ff',
    textAlign:'center'
  }
});
