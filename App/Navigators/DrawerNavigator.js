import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'App/Theme';
import SettingScreen from '../Containers/Setting/SettingScreen';
import SettingNavigator from './SettingNavigator';

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon name="home" size={20} color={tintColor} />
            ),
        }),
    },
    Setting: {
        screen: SettingNavigator,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'Setting',
            drawerIcon: ({ tintColor }) => (
                <Icon name="cog" size={20} color={tintColor} />
            ),
        }),
    }
}, {
    contentOptions: {
        activeTintColor: Colors.activeTint,
        inactiveTintColor: Colors.inactiveTint,
        itemsContainerStyle: {
            marginVertical: 30,
        },
    }
});


export default createAppContainer(DrawerNavigator)
