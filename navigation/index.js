import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SingleDetails, Transactions } from '../screens';

const Stack = createStackNavigator();


export const RootNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={'none'} initialRouteName={'Transactions'}>
                <Stack.Screen name="Transactions" component={Transactions} />
                <Stack.Screen name="SingleDetails" component={SingleDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

