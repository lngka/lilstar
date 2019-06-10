import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

class ZodiacGridScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>ZodiacGridScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: (Platform.OS == "ios") ? 35 : 0
    }
})
export default ZodiacGridScreen;