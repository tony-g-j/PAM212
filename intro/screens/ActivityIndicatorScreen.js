import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native';


export default function ActivityIndicatorScreen() {

  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => setCargando(false), 3000);
  }

  const detenetCarga = () => {
    setCargando(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Practica Activity Indicator </Text>
      <View style={styles.boton}>
        <Button
          color={'green'}
          title={cargando ? 'Cargando' : 'Iniciar Carga'}
          onPress={iniciarCarga}
        />
      </View>
      <View style={styles.carga}>
        <Button
          color={'red'}
          title='detener carga'
          onPress={detenetCarga}
        />
        <ActivityIndicator
          size={'large'}
          color={'#c81818ff'}
          animating={cargando}
          hidesWhenStopped={true}
        />
      </View>
      <Text style={styles.textoCarga}>
        {cargando ? 'Cargando datos' : 'Presiona el botón verde'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: "#f4f4f4ff",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boton: {
    width: 220,
    marginBottom: 16,
  },
  carga: {
    alignItems: 'center',
    marginTop: 20,
  },
  textoCarga: {
    marginTop: 12,
    fontSize: 16,
    color: '#fefefeff',
  },
})