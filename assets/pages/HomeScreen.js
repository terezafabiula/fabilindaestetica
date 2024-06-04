import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  
  const navigation = useNavigation()

  const [name, setName] = useState('')

  const handleAboutClick = () => {
    if (name!='') {
      navigation.navigate('About', {name: name})
    }
    //navigation.navigate('About', {cor: name})
  }

  return (
  
    <View style={styles.container}>
      <Image style={styles.img} source={require('../img/Fabilinda-removebg-preview.png')}/>
      <Text style={styles.pp}>Página Principal</Text>
      <Text style={styles.h2}>Bem vindo(a)! Digite seu nome abaixo.</Text>
      <TextInput 
        style={styles.input}
        value={name}
        onChangeText={t=>setName(t)}
      />
      

        <TouchableOpacity style={styles.button} onPress={handleAboutClick}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    backgroundColor: '#'
  },
  input: {
    width: 250,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#ddd'
  },
  img:{
    borderRadius: '50%',
    width: '240px',
    height: '240px',

  },
  pp:{
    marginTop:11,
    color: '#777',
    fontSize: 15,
  },
  h2: {
    color: '#777',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#de8db2',
    width: '90%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
})
