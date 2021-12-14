import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Botao() {
 return (
  <TouchableOpacity style={styles.botaoComprar}>
      <Text style={styles.textBotaoComprar}>Comprar</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    botaoComprar: {
        width: '90%',
        height: 60,
        backgroundColor: '#131313',
        justifyContent:'center',
        alignItems:'center'
    },
    textBotaoComprar:{
        width: '100%',
        color: '#ffffff',
        fontSize: 20,
    }
});