import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Button, Title} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'

export default function Home({navigation}) {

    function VisualizarDenuncia(){
        navigation.navigate("VisualizarDenuncia");
    }

    function Historico(){
        navigation.navigate("Historico");
    }


 return (
   <View>
       <View style={styles.cont1}>
            <Image source={require('../../img/siren.png')} style={styles.imgsiren} />
            <Text style={styles.txt_titulo}>Aglomerando</Text>
            <Text style={styles.txt_subtitulo}>Você viu algum tipo de aglomeração?</Text>
            <Text style={styles.txt_subtitulo}>Nos ajude, denúncie!</Text>
       </View>

       <View style={styles.cont2}>
            
            <Button icon={({ size, color, direction }) => (
    <Image
      source={require('../../img/edit.png')}
      style={[
        {
          transform: [{ scaleX: direction === 'rtl' ? -1 : 1 }],
        },
        {
          width: 25,
          height: 25,
          tintColor: color
        }
      ]}
    />
  )} mode="contained" style={styles.btnshome} color="#B71C1C" onPress={() => navigation.navigate('RealizarDenuncia')}>Realizar denúncia</Button>


            <Button icon={({size, color, direction}) => (
                <Image source={require('../../img/history.png')}
                style={[
                    {
                    transform: [{scaleX: direction === 'rtl' ? -1 : 1}]
                    },
                    {
                        width: 25,
                        height: 25
                    }
                ]} />
            )} mode="contained" style={styles.btnshome} color="#B71C1C" onPress={Historico}>Histórico</Button>

            <Button icon={({size, color, direction}) => (
                <Image source={require('../../img/history.png')}
                style={[
                    {
                    transform: [{scaleX: direction === 'rtl' ? -1 : 1}]
                    },
                    {
                        width: 25,
                        height: 25
                    }
                ]} />
            )} mode="contained" style={styles.btnshome} color="#B71C1C" onPress={VisualizarDenuncia}>Visualizar Denúncias</Button>

       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    cont1: {
        backgroundColor: '#B71C1C',
        width: '100%',
        height: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },

    cont2: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnshome: {
        width: '90%',
        marginBottom: 10,
        padding: 10
        
    },

    txt_titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFF'

    },

    txt_subtitulo: {
        fontSize: 20,

        color: '#FFF'
    },

    imgsiren: {
        width: 210,
        height: 210
    },

    icondenuncia: {
        width: 30,
        height: 30
    }
});
  