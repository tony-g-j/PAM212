import { Text, StyleSheet, View, ScrollView, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native'
import SwitchButton from './SwitchScreen'

export default function BotonesScreen() {
  const info = [
    { id: 1, title: 'Mantener la pantalla encendida', value: false },
    { id: 2, title: 'Ajustar brillo automático', value: true },
    { id: 3, title: 'WiFi', value: false },
    { id: 4, title: 'Bluetooth', value: false }
  ]

  const Item = ({ title, value }) => {
    return (
      <View style={styles.item}>
        <View style={styles.item2}>
          <Text style={styles.itemtitle}>{title}</Text>
        </View>
        <View style={styles.switch}>
          <SwitchButton temporal={value} isButton={true} />
        </View>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Sección de Switches */}
      <View style={styles.switchSection}>
        <View style={styles.Encabezado}>
          <Text style={styles.EncabezadoTitle}>Configuración</Text>
        </View>
        <View style={styles.footer}>
          {info.map(x => <Item key={x.id} title={x.title} value={x.value} />)}
        </View>
      </View>
 
      <View style={styles.buttonsSection}>
        <Text style={styles.header}>Tipos de Botones en React Native</Text>

        <Text style={styles.title}>1. Button (nativo)</Text>
        <Button title="Presionar" onPress={() => alert("Botón básico")} />

        <Text style={styles.title}>2. TouchableOpacity</Text>
        <TouchableOpacity style={styles.btnOpacity} onPress={() => alert("Opacity")}>
          <Text style={styles.text}>Botón Opacity</Text>
        </TouchableOpacity>

        <Text style={styles.title}>3. TouchableHighlight</Text>
        <TouchableHighlight
          style={styles.btnHighlight}
          underlayColor="#002a3dff"
          onPress={() => alert("Highlight")}
        >
          <Text style={styles.text}>Botón Highlight</Text>
        </TouchableHighlight>

        <Text style={styles.title}>4. TouchableWithoutFeedback</Text>
        <TouchableWithoutFeedback onPress={() => alert("Sin feedback")}>
          <View style={styles.btnNoFeedback}>
            <Text style={styles.text}>Sin feedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.title}>5. Pressable</Text>
        <Pressable
          onPress={() => alert("Pressable!")}
          style={({ pressed }) => [
            styles.btnPressable,
            {     
              backgroundColor: pressed ? "#ff7043" : "#66bb6a",
              transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
              opacity: pressed ? 0.7 : 1,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: pressed ? 1 : 4 },
              shadowOpacity: pressed ? 0.3 : 0.6,
              shadowRadius: pressed ? 2 : 4,
            },
          ]}
        > 
          <Text style={styles.text}>Botón Pressable</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 50,
  },
  switchSection: {
    width: '100%',
    marginBottom: 40,
  },
  buttonsSection: {
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: '#e0e0e0',
    paddingTop: 30,
  },
  Encabezado: {
    height: 75,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingHorizontal: 18
  },
  EncabezadoTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#094c73ff',
    marginLeft: 10
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 20
  },
  item: {
    height: 55,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item2: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  itemtitle: {
    fontSize: 15,
    fontWeight: '300',
    color: '#e60808ff'
  },
  switch: {
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
    color: "#333",
  },
  text: {
    color: "white",
    fontWeight: "600",
  },
  btnOpacity: {
    backgroundColor: "#2a9fffff",
    padding: 10,
    borderRadius: 8,
  },
  btnHighlight: {
    backgroundColor: "#29b6f6",
    padding: 10,
    borderRadius: 8,
  },
  btnNoFeedback: {
    backgroundColor: "#ab47bc",
    padding: 10,
    borderRadius: 8,
  },
  btnPressable: {
    padding: 10,
    borderRadius: 8,
  },
})