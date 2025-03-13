import React, { Component } from 'react'
import { ScrollView, Text, View,StyleSheet } from 'react-native'

export default class ScrollCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}> Scroll Cards </Text>
        <ScrollView horizontal style={styles.Container}>
            <View style={[styles.cardGeneric,styles.card1]}>
                <Text>Card1</Text>
            </View>
            <View style={[styles.cardGeneric,styles.card2]}>
                <Text>Card1</Text>
            </View>
            <View style={[styles.cardGeneric,styles.card3]}>
                <Text>Card1</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    Container:{
        margin:10,
        padding:5,
    },
    cardGeneric:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:200,
        height:180,
        padding:10,
        marginHorizontal:10,
        borderRadius: 7,
    },
    card1:{
        backgroundColor:"orange"
    },
    card2:{
        backgroundColor:"blue"
    },
    card3:{
        backgroundColor:"green"
    },
    header:{
        margin:10,
        fontSize:20,
        fontWeight:"bold"
    },
    text:{
        fontSize:15,
        fontFamily:"bold",
    }
})