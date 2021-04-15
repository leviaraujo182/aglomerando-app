import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Historico() {
    const importData = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);
            alert(result);
        } catch (error){

        }
    }

    importData();
 return (
   <View>
       <Text>Histórico de denuncias</Text>
   </View>
  );
}