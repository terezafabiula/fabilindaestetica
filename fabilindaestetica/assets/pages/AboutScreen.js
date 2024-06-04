import * as React from 'react';
import { View, Text, StyleSheet, Button, TextInput,TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const name = route.params?.name;
  const name2 = route.params?.name2;

  const handlePopupClick = () => {
    alert('Enviado!')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bemvindo}>Bem-Vindo: {name}</Text>
      <Text style={styles.agendarh}>Escolha o que deseja fazer e coloque a data.</Text>
      <Text style={styles.servicos}>
        1Limpeza de Pele. <br />
        2.Design de Sobrancelhas. <br />
        4.Preenchimento Labial.<br />
        5.Preenchimento Facial.<br />
        6.Depilação.<br />
        7.Corte de Cabelo.<br />
        8.Manicure e Pedicure.<br />
        9.Massagem modeladora. <br />
        10.Massagem relaxante.<br />
        11.Massagem redutora.<br />
        12.Drenagem linfática. <br />
        
      </Text>
    
     <TextInput 
        style={styles.input}
        value={name2}
        onChangeText={t=>setName2(t)}
      />
      
        <TouchableOpacity style={styles.button} onPress={handlePopupClick}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
  },
  // bemvindo: {
  //   color: '#777',
  //   fontSize: 15,
  //   marginTop: -600,
  // },
  agendarh: {
    marginTop: 10,
    color: '#999',
  },
  
 input: {
    width: 250,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#ddd'
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
});
