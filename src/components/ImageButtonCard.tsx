import { Component } from "react";
import { View, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import React from "react";

 /** allow passing style as prop */
interface Props {
    viewStyle?: ViewStyle;
  }

class ImageButtonCard extends Component<Props> {
    render () {
        return (
            <View style={[styles.container, this.props.viewStyle]}>
                <Text>Image Here</Text>
                <Text>Button Here</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center", 
        width: "100%",
        backgroundColor: "#ffcccc"
    }
});

export default ImageButtonCard;