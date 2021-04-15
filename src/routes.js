import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './pages/Home/Home';
import RealizarDenuncia from './pages/RealizarDenuncia/RealizarDenuncia';
import StatusDenuncia from './pages/StatusDenuncia/StatusDenuncia';
import VisualizarDenuncia from './pages/VisualizarDenuncias/VisualizarDenuncias';
import Historico from './pages/Historico/Historico';
import { color } from 'react-native-reanimated';

export default function routes() {


    const Stack = createStackNavigator();

 return (
   <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen name="Home" component={Home} options={{
               title: 'Home',
               headerShown: false
           }} />

            <Stack.Screen name="RealizarDenuncia" component={RealizarDenuncia} options={{
               title: 'Realizar denúncia',
               headerStyle: {
                   backgroundColor: '#B71C1C',
               },
               headerTintColor: '#FFF'
           }} />

            <Stack.Screen name="StatusDenuncia" component={StatusDenuncia} options={{
               title: 'Status Denuncia',
               headerStyle: {
                   backgroundColor: '#B71C1C',
               },
               headerTintColor: '#FFF'
           }} />

            <Stack.Screen name="VisualizarDenuncia" component={VisualizarDenuncia} options={{
               title: 'Visualizar Denuncia',
               headerStyle: {
                   backgroundColor: '#B71C1C',
               },
               headerTintColor: '#FFF'
           }} />

            <Stack.Screen name="Historico" component={Historico} options={{
               title: 'Histórico de denúncias',
               headerStyle: {
                   backgroundColor: '#B71C1C',
               },
               headerTintColor: '#FFF'
           }} />
       </Stack.Navigator>
   </NavigationContainer>
  );
}