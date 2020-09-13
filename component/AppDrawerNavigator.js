import React from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:{
        screen:SettingsScreen
    },
    
},
{contentComponent:CustomSideBarMenu},
{initialRouteName:'Home'

})