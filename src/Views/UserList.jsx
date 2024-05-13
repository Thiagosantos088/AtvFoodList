import 'react-native-gesture-handler'
import { useState } from 'react';
import React from "react";
import { View, Text, FlatList, Alert, Button, Pressable} from "react-native";
import { ListItem,ThemeProvider } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons'
import cardapio from '../Data/cardapio';
import { Avatar } from '@rneui/base';
 

export default props =>{
   
    const [num, setNum] = useState(0);
    const [contador, setContador] = useState(0);

    function adicionar() {
        setNum(num + 1); setContador(contador + 1); 
    }

    function retirar() {
        setNum(num - 1); setContador(contador + 1); 
        
    }

function getUserIntem ({item: cardapio}) {
    return (
       
    
        <ListItem>
            <Avatar source={{uri: cardapio.avatarURL}} size={50}></Avatar>
        <ThemeProvider>
            <ListItem.Content style={{marginTop:10, marginBottom:10,}}>
                <ListItem.Title style={{}}>{cardapio.name}</ListItem.Title>
                <ListItem.Title>{cardapio.desc}</ListItem.Title>
                <ListItem.Title style={{color: '#40A578'}}>{cardapio.valor}</ListItem.Title>
           </ListItem.Content>
           <ListItem.Chevron style={{backgroundColor: '#FFAF61'}}
                        name="add"
                        color="white"
                        size={20}
                        onPress={adicionar}
                         />
                    <Text style={{ textAlign: 'center', fontSize: 20, margin:10 }}>{num}</Text> 


            <ListItem.Chevron style={{backgroundColor: '#FFAF61'}}
                        name="remove"
                        color="white"
                        size={20}
                        onPress={retirar}
                        disabled={contador === 0}
                    />
          

        </ThemeProvider>
        </ListItem>
       
    )
}
return (
    <View>
        <FlatList
            keyExtractor={cardapio => cardapio.id.toString()}
            data={cardapio}
            renderItem={getUserIntem}
        />
    </View>
)
}
