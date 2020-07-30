import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { CustomSvg } from './CustomSvg';


export const CustomBtn = ({title='title', icon='creditCard', style}) => {
    return (
        <TouchableOpacity style={{...style, ...styles.container}}>
            <CustomSvg name={icon} style={{color: "black", width: 20, height: 20}}/>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "45%",
        paddingVertical: 5,
        backgroundColor: "#C8C8C8",
        borderRadius: 30,
        elevation: 5,
    },
    title: {
        color: "#686868",
        fontSize: 15,
        fontWeight: "bold",

    },
})