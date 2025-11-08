import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { ScrollView, SectionList, Switch } from 'react-native-web';




export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}> Noticon </Text>
      <ScrollView>
        <SectionList
          sections={categorias}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
             <View style={styles.card}>
              {item}
             </View>
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
  title:{
    fontSize:36,
    fontWeight:'bold'
  },
  img:{
    width:300,
    height:250
  },
  card:{
    flex:1,
    flexDirection:'row',
    height:300
  },
  ttl:{
    fontSize:18,
    fontWeight:'bold'
  },
  fech:{
    fontSize:16,
    fontWeight:'bold'
  },
  resumen:{
    fontSize:14
  },
  sectionHeader: {
    color: '#441111ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
});

const categorias = [
  {
    titulo: 'Deportes ', data: [
      <View style={styles.card}>
        <Image
         style={styles.img}
          source={require('../Examen2doP/assets/F1.jpg')}
          resizeMode='cover'
        />
        <Text >Ferrari, una gran dinastia</Text>
        <Text>25/8/2025</Text>
        <Text>Ferrari ha sido desde siempre una de las escuderias de formula uno mas prestigiosas y relevantes, siendo objeto de analisis en cada una de sus carreras, hecho que se recordara una vez mas con el inicio de la nueva temporada de la F1</Text>
        <Switch />
      </View>,
      <View>
        <Image
          style={styles.img}
          source={require('../Examen2doP/assets/sky.jpg')
          }
          
        />
        <Text>Se acerca el invierno y los esquiadores los saben</Text>
        <Text>11/11/2025</Text>
        <Text>Como bien sabemos estamos a fin de año, y entre nevadas y el frio de la epoca se ha generado un entorno apropiado para el esquí en nieve, muchos apacionados lo saben y se han preparado para disfrutar de esta temporada</Text>
        <Switch
        />
      </View>]
  },
  {
    titulo: 'Moda ', data: [
      <View>
        <Image
        style={styles.img}
          source={require('../Examen2doP/assets/zap.jpg')}
        />
        <Text>¿Cuantos pares de zapatos debo tener?</Text>
        <Text>05/07/2024</Text>
        <Text>Alguna vez te debes haber preguntado si tenias la cantidad suficiente de zapatos, esta pregunta es muy frecuente, la realidad es que no hay una cantidad fija pues es algo que depende de cada persona, asi que si estabas dudando de si comprar un nuevo par, si lo necesitas hazlo y disfrutalo</Text>
        <Switch />
      </View>,
      <View>
         <Image
         style={styles.img}
          source={require('../Examen2doP/assets/cold.jpg')}
        />
        <Text>temporada invernal</Text>
        <Text>12/12/2025</Text>
        <Text>Como bien sabemos desde hace uno mes el frio solo ha ido en aumento, es por eso que se aqui te venimos a recomendar las mejores protecciones para esta temporada, se recomienda el uso de chamarras, guantes, orejeras, etc...</Text>
        <Switch />

      </View>]
  },
  {
    titulo: 'Finanzas', data: [
      <View>
        <Image
          style={styles.img}
          source={require('../Examen2doP/assets/bit.jpg')}
        />
        <Text>La moneda del futuro, EL BITCOIN</Text>
        <Text>10/01/2020</Text>
        <Text>Durante varios dias ha crecido en popular esta moneda virtual, que busca destronar a las monedas mundiales, es una innovación que permite almacenarse no solo en carteras, ahora la puedes llevar incluso en un simple usb... </Text>
        <Switch />
      </View>,
      <View>
        <Image
          style={styles.img}
          source={require('../Examen2doP/assets/dll.jpg')}
        />
        <Text>El estado del dolar estadounidense</Text>
        <Text>12/08/2025</Text>
        <Text>Estados Unidos esta pasando por varias complejidades, y esto es algo directamente reflejado en el dolar, su moneda principal, se ha visto en los ultimos meses un gran tiempo de inestabilidad para este...</Text>
        <Switch />
      </View>]
  }
];