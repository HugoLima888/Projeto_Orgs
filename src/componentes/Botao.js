import React from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import Texto from '../componentes/Texto'

export default function Botao({children, style}){
    return <>
    <TouchableOpacity style={estilo.botao} onPress={() => {}}>
    <Texto style={style,estilo.textoBotao}>{children}</Texto>
    </TouchableOpacity>
    </>
}

const estilo= StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign: 'center',
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})