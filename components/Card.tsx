import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'

export default class Card extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Cards</Text>
        <View style={styles.Container}>
            <View style={[styles.cardGeneric,styles.card1]}>
                <Text style={styles.heading}>
                    Card01
                </Text>
            </View>
            <View style={[styles.cardGeneric,styles.card2]}>
                <Text style={styles.heading}>
                    Card02
                </Text>
            </View>
            <View style={[styles.cardGeneric,styles.card3]}>
                <Text style={styles.heading}>
                    Card03
                </Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({

   
    header:{
        margin:10,
        fontSize:20,
        fontWeight:"bold"
    },
    Container:{
        flex:1,
        flexDirection:"row",
        margin:5
    },
    cardGeneric:{
        flex:1,
        width:100,
        height:100,
        borderRadius: 7,
        
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:10
    },
    card1:{
        backgroundColor:"blue",
    },
    card2:{
        backgroundColor:"red",
    },
    card3:{
        backgroundColor:"orange",
    },

    heading:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },

})