import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detalle from "./Detalle";

const Stack = createNativeStackNavigator();

function Profile({navigation}) {
  return(
  <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="person-outline" size={28} color="green" />
        <Text style={styles.title}> Perfil de usuario </Text>

        <Pressable
          style={[styles.button, styles.buttonHome]}
          onPress={() => navigation.navigate('detalle')}
        >
          <Text style={styles.buttonText}>Detalles de usuario</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function ProfileS() {
  return (
   <Stack.Navigator>
    <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    <Stack.Screen name="detalle" component={Detalle} options={{title: 'regresar'}}/>
   </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  iconRow: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    color: "green",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonSettings: {
    backgroundColor: '#FF8800', 
  },
  buttonHome: {
    backgroundColor: '#2876a7ff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
