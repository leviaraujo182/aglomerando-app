import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { database } from '../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StatusDenuncia({navigation}) {
    

    function callInicio(){
        navigation.navigate("Home");
    }

 return (
   <View style={styles.body}> 
       <Card style={styles.carddenuncia}>
           <View style={styles.content_card}>
               <Image source={ require('../../img/alert.png')} style={styles.imgalert} />
                <Text style={styles.txtdenuncia}>DENÚNCIA ENVIADA</Text>
                <Text style={styles.txtanalise}>Sua denúncia foi enviada para análise. Uma equipe será deslocada para o local especificado.</Text>
           </View>
       </Card>
       <View>
           <Button style={styles.btnback} theme={{ colors: {primary: '#B71C1C'}}} onPress={callInicio}>Voltar para o inicio</Button>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    carddenuncia: {
        width: '95%',
        height: '40%',
       
    },

    txtdenuncia: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },

    txtanalise: {
        textAlign: 'center',
        fontSize: 20
    },
    content_card: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imgalert: {
        width: 90,
        height: 90
    },

    btnback: {
        color: '#FFF'
    }
})