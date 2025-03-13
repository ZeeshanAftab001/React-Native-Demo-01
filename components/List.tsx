import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function List() {


    const items = [
        {
            name: "Zeeshan",
            ph: "03332112684",
            image: require("../assets/pic.png"),
        },
        {
            name: "Ali Ahmad",
            ph: "03003423453",
            image: require("../assets/pic.png"),
        },
        {
            name: "Zubair",
            ph: "03215338874",
            image: require("../assets/pic.png"),
        },
        {
            name: "Abdullah",
            ph: "03104389674",
            image: require("../assets/pic.png"),
        },
    ]

    return (
        <View>
            <Text style={styles.header}> Contact List </Text>
            <View>
                {items.map((item) => (
                    <View key={item.name}>
                        <View style={styles.card}>
                            <View >
                                <Image source={item.image} style={styles.image} />
                            </View>
                            <View style={styles.container}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.phone}>{item.ph}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent:"center",
        marginHorizontal: 10,
    },
    header: {
        margin: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
    card: {
        padding: 10,
        flex: 1,
        backgroundColor: "#f7f7f7",
        flexDirection: "row",
        margin: 10,
        borderRadius: 20,
        shadowOffset:{
            width:10,
            height:10,
        },
        shadowColor:"black",
        shadowOpacity:0.1,
        elevation:1,
    },
    image: {
        borderRadius: 30,
        width: 50,
        height: 50,
    },
    name: {
        fontSize: 17,
        marginHorizontal: 10,
        fontWeight: "bold"
    },
    phone: {
        fontSize: 15,
        fontWeight: "500",
    },
})