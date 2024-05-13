import 'react-native-gesture-handler'
import React from "react";
import { Button } from '@rneui/themed';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/Ionicons'
 
import UserList from './Views/UserList';
import { Pressable } from 'react-native';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();


export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='UserList'
            screenOptions={
                {

                    headerStyle:{backgroundColor:'#FFAF61'},
                    headerTintColor: '#fff',
                    headerTitleStyle:{fontWeight:'bold'}
                }}>
             <Stack.Screen    name='Foods'
             component={UserList}>
                
          </Stack.Screen>


            </Stack.Navigator>
           <Pressable style={{backgroundColor:'#40A578', padding: 15, marginBottom: 10, borderRadius: 5,}}>
                <Text style={{textAlign: 'center', color: 'white'}}>Continue</Text>
           </Pressable>
        </NavigationContainer>
        
    )
}