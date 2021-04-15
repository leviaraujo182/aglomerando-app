import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { database } from '../../config/firebase'

export default function VisualizarDenuncias() {

    const [denuncias, setDenuncias] = useState([]);

    useEffect(()=>{
        database.collection('denuncias').onSnapshot((query)=>{
            const list = [];
            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id});
            })

            setDenuncias(list);
        })
    }, [])

 return (
     <ScrollView>
   <View style={styles.body}>
       {denuncias.map((denuncia) => {
           return (
        <Card style={styles.estilo_card}>
           <View style={styles.content_card}>
           <Text style={styles.headerdenuncia}>DENÚNCIA</Text>
           <Text style={styles.endereco}>Endereço</Text>
           <Text key={denuncia.id}>{denuncia.endereco_ocorrencia}</Text>
           <Text style={styles.endereco}>Bairro</Text>
           <Text>{denuncia.bairro_ocorrencia}</Text>
           <Text style={styles.endereco}>Tipo de denúncia</Text>
           <Text>{denuncia.tipo_corroencia}</Text>
           <Text style={styles.endereco}>Responsável pela ocorrência</Text>
           <Text>{denuncia.nomepessoa}</Text>
           </View>
       </Card>
           )
       })}
   </View>
   </ScrollView>
  );
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F5f5f5',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
    },

    estilo_card: {
        width: '95%',
        marginTop: 15,
        height: 250
    },

    content_card: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
 
    },

    headerdenuncia: {
        fontWeight: 'bold',
        fontSize: 25
    },

    endereco: {
        fontWeight: 'bold',
        fontSize: 15
    }
})