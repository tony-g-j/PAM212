
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";


export default function App() {
  const [Contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto2}> {Contador} </Text>

      <View style={styles.buttonContainer}>
        <Button
          color="green"
          title="Incrementar"
          onPress={() => setContador(Contador + 1)}
        ></Button>
        <Button
          color="orange"
          title="Quitar"
          onPress={() => setContador(Contador - 1)}
        ></Button>
        <Button
          color={"red"}
          title="Reiniciar"
          onPress={() => setContador(Contador - Contador)}
        ></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //distribución de los componentes
    backgroundColor: "#fff", //color del fondo
    alignItems: "center", //Posicionamiento de los componentes en el eje x
    justifyContent: "center", //posicionamiento de los componentes en el eje y
  },
  texto: {
    color: "#021742ff", //color de fuente
    fontSize: 30, //tamaño de fuente
    fontFamily: "Times New Roman", //tipografia de la fuente
    fontWeight: "bold", // negritas
    fontStyle: "italic", // inclinacion o estilo de la fuente
    textDecorationLine: "line-through",
  },
  texto2: {
    color: "#ff0000ff", //color de fuente
    fontSize: 40, //tamaño de fuente
    fontFamily: "Courier", //tipografia de la fuente
    fontWeight: "400", // negritas
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 20,
  },
});
