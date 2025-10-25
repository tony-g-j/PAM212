import React, { } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

const DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const SimpleHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ScrollView</Text>
    </View>
  );
};

export default function ScrollViewScreen() {
  return (
    <View style={styles.view}>
      <View style = {styles.container}>
        <SimpleHeader />
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent2}
        >
          {DATA.map(val => {
            return (
              <View style={styles.cardH} key={val.id}>
                <Text style={styles.text}> Tarjeta </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.container2}>
        <SimpleHeader />
        <ScrollView
          showsVerticalScrollIndicator={true} >
          {DATA.map(val2 => {
            return (
              <View style={styles.cardV} key={val2.id}>
                <Text style={styles.text2}> Tarjeta </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view:{
    flex:1
  },
  container:{
    flex:1
  },
  container2:{
    flex:1
  },
  header: {
    height: 120,
    backgroundColor: '#ca2424ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },
  title: {
    fontSize: 20,
    color: '#ffffffff',
    fontWeight: 'bold'
  },
  cardV: {
    height: 100,
    backgroundColor: '#380000ff',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardH: {
    height: 150,
    width:100,
    backgroundColor: '#380000ff',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#d6d6d6ff',
    fontWeight: 'bold'
  },
  text2: {
    color: '#d6d6d6ff',
    fontWeight: 'bold'
  },
  scrollContent2:{
    paddingVertical: 25
  }

})