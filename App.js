import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Principal from './src/telas/Principal';
import TelaLogin from './src/telas/TelaLogin';


const Stack = createNativeStackNavigator();

export default function App()
{
  return(
    <NavigationContainer>
        <Stack.Navigator>
          {/* Tela Inicial */}
           <Stack.Screen 
           name="Principal" 
           component={Principal}
           options={{
             title: 'Cronograma Rock in Rio 2022',
             headerStyle:{
               backgroundColor: '#00238E'
             },
             headerTintColor: "#fff",
             headerTitleAlign:"center",
             headerShown: false
           }}>
           </Stack.Screen>

          { /*Tela Login*/}
          <Stack.Screen 
           name="TelaLogin"
            component={TelaLogin}
            options={{
              title: 'Entre',
              headerStyle:{
              backgroundColor: '#9400d3'
              },
              headerTintColor: "#fff",
              headerShown: false
            }} 
            >
          </Stack.Screen>    
        </Stack.Navigator>
    </NavigationContainer>
  )
}