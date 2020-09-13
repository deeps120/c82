import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import db from '../config';
import firebase from 'firebase';

export default class RecieverDetailsScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
            recieverId: this.props.navigations.getParam('details')['user_id'],
            requestId: this.props.navigations.getParam('details')['request_id'],
            bookName: this.props.navigations.getParam('details')['book_name'],
            reasonForRequest: this.props.navigations.getParam('details')['reason_for_request'],
            recieverName:'',
            recieverContact:'',
            reciverAddress:'',
            recieverRequestDocId:''
        }
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}