import { Component, FunctionComponent } from "react";
import { View, StyleSheet, Text, TextStyle, ViewStyle, Image, ImageSourcePropType, TouchableHighlight, GestureResponderEvent, TouchableOpacity } from "react-native";
import React from "react";

 /** allow passing style as prop */
interface Props {
    //viewStyle?: ViewStyle;
    //textStyle?: TextStyle;
    imgSource: ImageSourcePropType,
    label: string,
    clickHandler?: (event: GestureResponderEvent) => void
}

class ImageButtonCard extends Component<Props> {
    render () {
        return (
            <TouchableOpacity style={styles.touchableWrapper} onPress={this.props.clickHandler} >
                <View style={styles.container} >
                    <Image resizeMode="contain" source={this.props.imgSource} style={styles.zodiacIcon} />
                    <Text>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    touchableWrapper: {
        flex: 1,
    },
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