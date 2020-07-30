import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pie from 'react-native-pie'

export const PieChart = ({percentage=40, color='red'}) => {
    return (
        <View style={styles.pieChart}>
            <Pie
                radius={50}
                innerRadius={45}
                sections={[
                    {
                        percentage,
                        color,
                    },
                ]}
                backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
                <Text style={styles.gaugeText}>{percentage}%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
})