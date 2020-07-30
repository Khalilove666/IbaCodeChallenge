import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import transactions from '../utils/data';
import { PieChart, CustomSvg } from '../components';


export const Transactions = ({ navigation }) => {

    const [search, setSearch] = useState("")
    const [searchVisible, setSearchVisible] = useState(true);

    const [searchResult, setSearchResult] = useState(transactions)


    const searchHandler = (text) => {
        setSearch(text);
        const newSerch = transactions.filter(item => item.name.includes(text.trim()));
        setSearchResult(newSerch);
    }
    useEffect(() => {
        !search ? setSearchVisible(true) : setSearchVisible(false);
    })

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Transactions Screen</Text>
            </View>
            <View style={styles.searchBar}>
                <TextInput style={styles.searchInput} value={search} onChangeText={text => searchHandler(text)} onFocus={() => setSearchVisible(false)} />
                {searchVisible ?
                    <View style={styles.searchHolder}>
                        <CustomSvg name={"search"} style={{ width: 15, height: 15, color: '#C8C8C8' }} />
                        <Text style={styles.searchText}>Search</Text>
                    </View> : null
                }
            </View>
            <Text style={styles.subHeader}>Performance</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.pieHolder}>
                <View style={styles.pieItem}>
                    <Text style={styles.pieItemText}>Current Week</Text>
                    <PieChart percentage={64} color={'green'} />
                </View>
                <View style={styles.pieItem}>
                    <Text style={styles.pieItemText}>Last Week</Text>
                    <PieChart percentage={40} color={'red'} />
                </View>
                <View style={styles.pieItem}>
                    <Text style={styles.pieItemText}>Last Month</Text>
                    <PieChart percentage={90} color={'purple'} />
                </View>
            </View>
            <Text style={styles.subHeader}>Transactions</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.listHolder}>
                {searchResult.map((item) =>
                    <TouchableOpacity
                        style={styles.listItem}
                        key={item.id}
                        onPress={() => navigation.navigate("SingleDetails", { item })}
                    >
                        <Image
                            resizeMode={"cover"}
                            style={styles.image}
                            source={{ uri: item.imgUrl, cache: 'only-if-cached' }}
                        />
                        <Text style={styles.customerName}>{item.name}</Text>
                        <Text style={styles.price}>{item.currency} {item.price}</Text>
                    </TouchableOpacity>
                )}
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
        backgroundColor: "#C8C8C8",
        justifyContent: "center",
        alignItems: "center",
    },
    searchInput: {
        backgroundColor: "white",
        marginVertical: 5,
        borderRadius: 8,
        width: "97%",
        textAlign: "center",
        paddingHorizontal: 15,
        fontSize: 18,
    },
    searchHolder: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
    },
    searchText: {
        fontSize: 15,
        marginLeft: 10,
        color: "#C8C8C8",
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    pieItem: {
        justifyContent: "space-between",
        alignItems: "center",
        width: '33%',
    },
    pieItemText: {

    },
    pieChart: {
        justifyContent: "center",
        alignItems: 'center',
    },
    gauge: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
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