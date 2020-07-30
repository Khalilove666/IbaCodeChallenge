import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomSvg, CustomBtn } from '../components';


export const SingleDetails = ({ navigation, route }) => {

    const { name, currency, price, date } = route.params.item;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <CustomSvg name={'chevronLeft'} style={styles.arrowBack} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{name}</Text>
            </View>
            <Text style={styles.price}>{currency} {price}</Text>
            <View style={styles.btnsHolder}>
                <CustomBtn />
                <CustomBtn />
            </View>
            <Text style={styles.subHeader}>Transaction Detail</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.paymentDetail}>
                <View style={styles.paymentInfo}>
                    <Text style={styles.detailText}>Payment Detail</Text>
                    <View style={styles.detailValuesHolder}>
                        <Text style={styles.detailValue}>{date}</Text>
                        <TouchableOpacity style={styles.infoBtn}>
                            <CustomSvg name={'infoCircle'} style={{color: "#C8C8C8"}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tinyLine} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    header: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 40,
    },
    backBtn: {
        width: 25,
        height: 25,
    },
    arrowBack: {
        color: "black"
    },
    price: {
        fontSize: 36,
        fontFamily: "bold",
        marginVertical: 50,
    },
    btnsHolder: {
        width: "50%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    subHeader: {
        marginTop: 10,
        width: '90%',
        fontSize: 18,
    },
    horizontalLine: {
        width: "90%",
        height: 2,
        backgroundColor: "grey",
        marginTop: 10,
    },
    paymentDetail: {
        width: "90%",
    },
    paymentInfo: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detailValuesHolder: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    infoBtn: {
        width: 20,
        height: 20,
    },
    tinyLine: {
        width: "100%",
        height: 1,
        backgroundColor: "#C8C8C8",
    }
});