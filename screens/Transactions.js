import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';

import transactions from '../utils/data';

export const Transactions = ({navigation}) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Transactions Screen</Text>
            </View>
            <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} />
            </View>
            <Text style={styles.subHeader}>Performance</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.pieHolder}>
                <View style={styles.pieItem}>
                    <Text style={styles.pieItemText}>Current Week</Text>
                    <View style={styles.pieChart} />
                </View>
                <View style={styles.pieItem}>
                    <Text style={styles.pieItemText}>Last Week</Text>
                    <View style={styles.pieChart} />
                </View>
                <View style={styles.pieItem}>
                    <Text style={styles.pieItemText}>Last Month</Text>
                    <View style={styles.pieChart} />
                </View>
            </View>
            <Text style={styles.subHeader}>Transactions</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.listHolder}>
                {transactions.map((item) => 
                    <TouchableOpacity
                    style={styles.listItem}
                    key={item.id}
                    onPress={() => navigation.navigate("SingleDetails" , {item})}
                    >
                        <Image
                            resizeMode={"cover"}
                            style={styles.image}
                            source={{ uri: item.imgUrl }}
                        />
                        <Text style={styles.customerName}>{item.name}</Text>
                        <Text style={styles.price}>{item.currency} {item.price}</Text>
                    </TouchableOpacity>
                )}
                {/* <View style={styles.listItem}>
                    <Image
                        resizeMode={"cover"}
                        style={styles.image}
                        source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" }}
                    />
                    <Text style={styles.customerName}>John Doe</Text>
                    <Text style={styles.price}>$ 300</Text>
                </View> */}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    header: {
        width: '90%',
        marginTop: 20,
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    searchBar: {
        marginTop: 10,
        width: "90%",
        backgroundColor: "grey",
    },
    searchInput: {
        backgroundColor: "white",
        margin: 8,
        borderRadius: 8,
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
    pieHolder: {
        marginTop: 10,
        height: 120,
        width: "90%",
        backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    pieItem: {
        justifyContent: "space-between",
        alignItems: "center",
        width: '33%',
        backgroundColor: "green"
    },
    pieItemText: {

    },
    pieChart: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "violet"
    },
    listHolder: {
        width: "90%",
        paddingTop: 20,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    customerName: {
        fontSize: 15,
    },
    price: {
        fontSize: 15,
    }
});