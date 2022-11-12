import React from "react";
import {View,StyleSheet,Text } from "react-native";

export default function Header(){
    return(
    <View style={styles.Header}>
        <Text style={styles.Title}>
            My Todo List
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
Header:{
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral'
},
Title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign:'center',
}
})