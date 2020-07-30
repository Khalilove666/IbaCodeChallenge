import React from 'react';
import { View, StyleSheet} from 'react-native';
import { RootNav } from '../navigation';


export const Layout = () => {

    return (
        <View style={styles.container}>
            <RootNav />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
})