import React,{Component} from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from 'react-native';
import {Header,Icon} from 'react-native-elements';

const MyHeader = props => {
    return(
        <Header
        leftComponent={<Icon
            name='bars'
            type='font-awesome'
            color='grey'
            onPress={()=>props.navigation.toggleDrawer()}
            />}
            centerComponent={{text:props.title,style:{clor:'orange',
        fontSize:20,fontWeight:'bold'}}}
backgroundColor='blue'
           /> 
    )
}
export default MyHeader;