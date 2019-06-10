import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import ImageButtonCard from "../../components/ImageButtonCard";

class ZodiacGridScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.gridRow}>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                    <ImageButtonCard viewStyle={styles.gridItem}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: (Platform.OS == "ios") ? 35 : 0,
        backgroundColor: "grey",
        height: "100%",
        justifyContent: "space-evenly"
    },
    gridRow: {
        flexDirection: "row",
        backgroundColor: "white",
        flex: 1
    },
    gridItem: {
        flex: 1,
        margin: 8
    }
})
export default ZodiacGridScreen;