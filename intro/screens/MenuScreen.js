import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './botones/BotonesScreen';
import Text_AlertScreen from './Text_AlertScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import ListasScreen from './ListasScreen';
import SplashScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';


export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');
  switch (screen) {
    case 'contador':
      return <ContadorScreen/>;
    case 'botones':
      return <BotonesScreen/>;
    case 'textAlert':
      return <Text_AlertScreen/>;
    case 'scrollView':
      return <ScrollViewScreen/>;
    case 'modal':
      return <ModalScreen/>;
    case 'bottomSheet':
      return <BottomSheetScreen/>;
    case 'listas':
      return <ListasScreen/>;
    case 'imgBackgroud':
      return <SplashScreen/>;
    case 'activityIndicator':
      return <ActivityIndicatorScreen/>;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text>MenuScreen</Text>
          <Button onPress={() => setScreen('contador')} title='Practica: Contador'/>
          <Button onPress={() => setScreen('botones')} title='Practica: Botones'/>
          <Button onPress={() => setScreen('textAlert')} title='Practica: Text Alert'/>
          <Button onPress={() => setScreen('scrollView')} title='Practica: ScrollView'/>
          <Button onPress={() => setScreen('modal')} title='Practica: Modal'/>
          <Button onPress={() => setScreen('bottomSheet')} title='Practica: Bottom Sheet'/>
          <Button onPress={() => setScreen('listas')} title='Practica: Listas'/>
          <Button onPress={() => setScreen('imgBackgroud')} title='Practica: Image Background'/>
          <Button onPress={() => setScreen('activityIndicator')} title='Practica: Activity Indicator'/>
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
