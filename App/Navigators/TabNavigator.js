import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StackNavigator from "./StackNavigator";
import Icon from 'react-native-vector-icons/FontAwesome';
export default createBottomTabNavigator({
    Home: {
        screen: StackNavigator,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={20} color={tintColor} />
            ),
        }),
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    })
});