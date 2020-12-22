import React, { Component } from 'react';
import {View,Text,Modal, TextInput,TouchableOpacity,StyleSheet, ScrollView,Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../MyHeader';
export default class UploadHomeWork extends React.Component{
    render(){
        return(
            <View>
            <View>
                <MyHeader 
                title="upload Home-work"/>
            </View>
            </View>
        )
    }
}