import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomSvg, CustomBtn } from '../components';


export const SingleDetails = ({ navigation, route }) => {

    const { name, currency, price, date, type, payWith } = route.params.item;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <CustomSvg name={'arrowLeft'} style={styles.arrowBack} />
                </TouchableOpacity>
                <Text style={styles.headerText}>{name}</Text>
            </View>
            <Text style={styles.price}>{currency} {price}</Text>
            <View style={styles.btnsHolder}>
                <CustomBtn title={"Card"} icon={'creditCard'}/>
                <CustomBtn title={"Debt"} icon={'dollar'}/>
            </View>
            <Text style={styles.subHeader}>Transaction Detail</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.transactionDetail}>
                <View style={styles.detailItem}>
                    <Text style={styles.detailText}>Payment Detail</Text>
                    <View style={styles.detailValuesHolder}>
                        <Text style={styles.detailValue}>{date}</Text>
                        <TouchableOpacity style={styles.infoBtn}>
                            <CustomSvg name={'infoCircle'} style={{color: "#0073e6"}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tinyLine} />
                <View style={styles.detailItem}>
                    <Text style={styles.detailText}>Type</Text>
                    <View style={styles.detailValuesHolder}>
                        <Text style={styles.detailValue}>{type}</Text>
                        <TouchableOpacity style={styles.infoBtn}>
                            <CustomSvg name={'infoCircle'} style={{color: "#0073e6"}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tinyLine} />
                <View style={styles.detailItem}>
                    <Text style={styles.detailText}>Pay with</Text>
                    <View style={styles.detailValuesHolder}>
                        <Text style={styles.detailValue}>{payWith}</Text>
                        <TouchableOpacity style={styles.infoBtn}>
                            <CustomSvg name={'infoCircle'} style={{color: "#0073e6"}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.tinyLine} />
            </View>
            <View style={styles.exportHolder}>
                <TouchableOpacity style={styles.exportItem}>
                    <CustomSvg name={"download"} style={{width: 20, height: 20, color: "black"}}/>
                    <Text style={styles.exportText}>Export</Text>
                </TouchableOpacity>
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
    transactionDetail: {
        width: "90%",
        paddingTop: 30,
    },
    detailItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 18,
    },
    detailText: {
        fontSize: 15,
        fontWeight: "800",
        marginLeft: 10,
    },
    detailValuesHolder: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detailValue: {
        fontSize: 13,
        marginRight: 15,
    },
    infoBtn: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    tinyLine: {
        width: "100%",
        height: 1,
        backgroundColor: "#C8C8C8",
        marginTop: 8,
    },
    exportHolder: {
        marginTop: 30,
        width: "90%",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    exportItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    exportText: {
        fontSize: 15,
        marginLeft: 15,
    }
});