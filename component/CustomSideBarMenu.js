import React from 'react';
import { StyleSheet,View,Text,TextInput,TouchableOpacity } from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class  CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems {...this.props}></DrawerItems>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('welcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text>logOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })
  
 