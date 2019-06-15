import { Component } from "react";
import { View, StyleSheet, Text, TextStyle, ViewStyle, Image, ImageSourcePropType } from "react-native";
import React from "react";

 /** allow passing style as prop */
interface Props {
    //viewStyle?: ViewStyle;
    //textStyle?: TextStyle;
    imgSource: ImageSourcePropType,
    label: string
}

class ImageButtonCard extends Component<Props> {
    render () {
        return (
/*             <View style={[styles.container, this.props.viewStyle]}>
                <Text>Image Here</Text>
                <Text>Button Here</Text>
            </View> */
            <View style={styles.container}>
                <Image resizeMode="contain" source={this.props.imgSource} style={styles.zodiacIcon} />
                <Text>{this.props.label}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        margin: 3,
    },
    zodiacIcon: {
        width:"88%",
    }
});

export default ImageButtonCard;