import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');
  switch (screen) {
    case 'contador':
      return <ContadorScreen/>;
    case 'botones':
      return <BotonesScreen/>;
    case 'menu':
        default:
            return (
                <View style = {styles.container}>
                    <Text>MenuScreen</Text>
                    <Button onPress={()=> setScreen('contador')} title='Practica:Contador'></Button>
                    <Button onPress={()=> setScreen('botones')} title='Practica:Botones'></Button>
                    <Button onPress={()=> setScreen('botones')} title='Practica:'></Button>
                    <Button onPress={()=> setScreen('botones')} title='Practica:'></Button>
                    <Button onPress={()=> setScreen('botones')} title='Practica:'></Button>
                    <Button onPress={()=> setScreen('botones')} title='Practica:'></Button>
                    <Button onPress={()=> setScreen('botones')} title='Practica:'></Button>
                </View>
            );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
