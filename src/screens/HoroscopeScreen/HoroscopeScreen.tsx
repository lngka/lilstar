import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

class HoroscopeScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.chartArea}>
                    <Text>Chart goes here</Text>
                </View>
                <View style={styles.horoscropeArea}>
                    <Text>Horoscope goes here</Text>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        height: "100%",
        flexDirection: "column"
    },
    chartArea: {
        flex: 1,
        backgroundColor: "#ffcccc"
    },
    horoscropeArea: {
        flex: 2,
        backgroundColor: "#ccffff"
    }
});

export default HoroscopeScreen;