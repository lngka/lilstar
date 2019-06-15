import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import ImageButtonCard from "../../components/ImageButtonCard";

class ZodiacGridScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.gridRow}>
                    <ImageButtonCard label="Aries" imgSource={require("../../assets/img/aries.png")}/>
                    <ImageButtonCard label="Taurus" imgSource={require("../../assets/img/taurus.png")}/>
                    <ImageButtonCard label="Gemini" imgSource={require("../../assets/img/gemini.png")}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard label="Cancer" imgSource={require("../../assets/img/cancer.png")}/>
                    <ImageButtonCard label="Leo" imgSource={require("../../assets/img/leo.png")}/>
                    <ImageButtonCard label="Virgo" imgSource={require("../../assets/img/virgo.png")}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard label="Libra" imgSource={require("../../assets/img/libra.png")}/>
                    <ImageButtonCard label="Scorpio" imgSource={require("../../assets/img/scorpio.png")}/>
                    <ImageButtonCard label="Sagittarius" imgSource={require("../../assets/img/sagittarius.png")}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard label="Capricorn" imgSource={require("../../assets/img/capricorn.png")}/>
                    <ImageButtonCard label="Aquarius" imgSource={require("../../assets/img/aquarius.png")}/>
                    <ImageButtonCard label="Pisces" imgSource={require("../../assets/img/pisces.png")}/>
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
        flex: 1
    }
})
export default ZodiacGridScreen;