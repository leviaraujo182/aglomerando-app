import React, { useState } from 'react';
import { View, StyleSheet, Text, ToastAndroid } from 'react-native';
import { Card, TextInput, Button, Snackbar } from 'react-native-paper';
import { database } from '../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
import 'firebase/firestore';


export default function RealizarDenuncia({navigation}) {


    const [nomepessoa, setNomepessoa] = useState('');
    const [enderecopessoa, setEnderecopessoa] = useState('');
    const [telefonepessoa, setTelefonepessoa] = useState('');
    const [endereco_ocorrencia, setendrecoocorrencia] = useState('');
    const [bairro_ocorrencia, setbairroocorrencia] = useState('');
    const [tipo_corroencia, settipoocorrencia] = useState('');

    const [visible, setVisible] = React.useState(false);

    function addProduto(){
        if(nomepessoa == '' || enderecopessoa == '' || telefonepessoa == '' || endereco_ocorrencia == '' || bairro_ocorrencia == '' || tipo_corroencia == ''){
            ToastAndroid.showWithGravityAndOffset("Preencha todos os campos", ToastAndroid.LONG, ToastAndroid.BOTTOM,25,50);
        } else {
        database.collection('denuncias').add({
            nomepessoa,
            enderecopessoa,
            telefonepessoa,
            endereco_ocorrencia,
            bairro_ocorrencia,
            tipo_corroencia
        });

        const storeData = async(value) => {
            try {
                await AsyncStorage.setItem('@name', value)
            } catch (e) {

            }
        }
        storeData('Levi');
        navigation.navigate("StatusDenuncia");
    }

    }


 return (
   <View style={styles.body}>
       <Card style={styles.carddados}>
           <Text style={styles.txt_seusdados}>SEUS DADOS</Text>
           <TextInput value={nomepessoa} onChangeText={setNomepessoa} label="Nome" mode="flat" style={styles.inputdados}/>
           <TextInput value={enderecopessoa} onChangeText={setEnderecopessoa} label="Endereço" mode="flat" style={styles.inputdados}/>
           <TextInput value={telefonepessoa} onChangeText={setTelefonepessoa} label="Telefone" mode="flat" style={styles.inputdados}/>
       </Card>

       <Card style={styles.carddados}>
           <Text style={styles.txt_seusdados}>DADOS DA OCORRÊNCIA</Text>
           <TextInput value={endereco_ocorrencia} onChangeText={setendrecoocorrencia} label="Endereço" mode="flat" style={styles.inputdados}/>
           <TextInput value={bairro_ocorrencia} onChangeText={setbairroocorrencia} label="Bairro" mode="flat" style={styles.inputdados}/>
           <TextInput value={tipo_corroencia} onChangeText={settipoocorrencia} label="Tipo de ocorrência" mode="flat" style={styles.inputdados}/>
       </Card>
       <Button mode='contained' style={styles.btnenviar} onPress={addProduto}>Enviar Denúncia</Button>

   </View>

  );
}

const styles = StyleSheet.create({
   body: {
       backgroundColor: '#F5F5F5',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
   },

   carddados: {
       marginTop: 15,
       width: '95%',
       elevation: 2,
       display: 'flex',
       paddingBottom: 20
   },

   txt_seusdados: {
       textAlign: 'center',
       fontWeight: 'bold',
       fontSize: 20,
       marginTop: 10
   },

   inputdados: {
     marginLeft: 10,
     marginRight: 10,
     marginTop: 5,
     backgroundColor: '#FFF'
       
   },

   btnenviar: {
       marginTop: 20,
       width: '80%',
       padding: 10,
       backgroundColor: '#B71C1C'

   }
});
  