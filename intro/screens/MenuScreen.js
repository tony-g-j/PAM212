import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './botones/BotonesScreen';
import Text_AlertScreen from './Text_AlertScreen';
import ScrollViewScreen from './ScrollViewScreen_1';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import ListasScreen from './ListasScreen';
import SplashScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import Repaso_1 from './Repaso_1';

export default function MenuScreen() {

  const [screen, setScreen] = useState('Menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'textAlert':
      return <Text_AlertScreen />;
    case 'scrollView':
      return <ScrollViewScreen />;
    case 'modal':
      return <ModalScreen />;
    case 'bottomSheet':
      return <BottomSheetScreen />;
    case 'listas':
      return <ListasScreen />;
    case 'imgBackgroud':
      return <SplashScreen />;
    case 'activityIndicator':
      return <ActivityIndicatorScreen />;
    case 'Repaso_1':
      return <Repaso_1 />
    case 'Menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>MenuScreen</Text>
          <View style={styles.btns}>
            <Button onPress={() => setScreen('contador')} title='Practica: Contador' />
            <Button onPress={() => setScreen('botones')} title='Practica: Botones' />
            <Button onPress={() => setScreen('textAlert')} title='Practica: Text Alert' />
            <Button onPress={() => setScreen('scrollView')} title='Practica: ScrollView' />
            <Button onPress={() => setScreen('modal')} title='Practica: Modal' />
            <Button onPress={() => setScreen('bottomSheet')} title='Practica: Bottom Sheet' />
            <Button onPress={() => setScreen('listas')} title='Practica: Listas' />
            <Button onPress={() => setScreen('imgBackgroud')} title='Practica: Image Background' />
            <Button onPress={() => setScreen('activityIndicator')} title='Practica: Activity Indicator' />
            <Button onPress={() => setScreen('Repaso_1')} title='Practica: Repaso 1' />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#0a0a0aff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    padding: 20,
    color: '#604efcff',
    fontSize: 30
  },
  btns:{
    gap: 25
  }
});
