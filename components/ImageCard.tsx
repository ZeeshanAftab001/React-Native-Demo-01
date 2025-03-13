import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default class ImageCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Image Card</Text>
                <View style={styles.card}>
                    <Image source={require("../assets/pic.png")} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Zeeshan</Text>
                        <Text style={styles.para}>
                            A string that defines an alternative text description of the image, 
                            which will be read by the screen reader when the user interacts with it.
                            Using this will automatically mark this element as accessible.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f8f8",
        padding: 10,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 7,
        padding: 10,
        alignItems: "center",
        elevation: 5,
        width: 350,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    para: {
        fontSize: 12,
        color: "#555",
    },
});
