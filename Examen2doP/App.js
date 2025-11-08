import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { ScrollView, SectionList, Switch } from 'react-native-web';


const categorias = [
  {
    titulo: 'Deportes ', data: [
      <View >
        <
        <Text>titulo</Text>
        <Text>Fecha</Text>
        <Text>resumen</Text>
        <Switch />
      </View>,
      <View>
        <Text>titulo</Text>
        <Text>Fecha</Text>
        <Text>resumen</Text>
        <Switch />
      </View>]
  },
  {
    titulo: 'Moda ', data: [
      <View>
        <Image />
        <Text>titulo</Text>
        <Text>Fecha</Text>
        <Text>resumen</Text>
        <Switch />
      </View>,
      <View>

      </View>]
  },
  {
    titulo: 'Finanzas', data: [
      <View>
        <Text>titulo</Text>
        <Text>Fecha</Text>
        <Text>resumen</Text>
        <Switch />
      </View>,
      <View>
        <Text>titulo</Text>
        <Text>Fecha</Text>
        <Text>resumen</Text>
        <Switch />
      </View>]
  }
];

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}> Noticon </Text>
      <ScrollView>
        <SectionList
          sections={categorias}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Text style={styles.itemText}> {item}</Text>
          )}
          renderSectionHeader={({ section: { titulo } }) => (
            <Text style={styles.sectionHeader}>{titulo}</Text>
          )}
          render
        />
        

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
