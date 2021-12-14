import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../components/texto';
import topo from '../../../../assets/topo.png';


const width = Dimensions.get('screen').width;


export default function Topo({titulo}) {
 return (
     <>
    <Image style={styles.topo} source={topo} />
    <Texto style={styles.titulo}>{titulo}</Texto>
    </>
  );
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,  //Altura da imagem é 578 / 768 que é a largura da imagem e multiplica pela largura da tela.
    },
    titulo: {
        width: '100%',
        position: 'absolute', //Colocar em cima do componente
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        padding: 16
    },
});
