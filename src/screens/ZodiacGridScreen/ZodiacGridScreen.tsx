import React, { Component } from "react";
import { View, StyleSheet, Platform, GestureResponderEvent } from "react-native";
import ImageButtonCard from "../../components/ImageButtonCard";

import Zodiacs from "../../models/ZodiacEnum";
import { naviActionCreator } from '../../store/actions/actionCreatorIndex'
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { NaviActionData } from "../../store/actions/naviActionCreator";

import { HoroscopeScreen } from "../ScreenIndex";

/**
 * Define interface for props
 * so that TypeScript allows calling this.props.******
 */
interface IMapStateToProps {}
interface IMapDispatchToProps {
    dispatchNaviAction: (data: NaviActionData) => void;
}
interface Props extends IMapStateToProps, IMapDispatchToProps {
}

/**
 * ZodiacGridScreen renders a 3x4 grid, each item represents a zodiac 
 */
class ZodiacGridScreen extends Component<Props> {
    /**
     * Create a function that navigate app to 
     * the corresponding horoscope screen
     */
    CreateOnImageButtonClickHandler = (target: Zodiacs) => {
        const data = {
            destination: HoroscopeScreen,
            zodiac: target
        };

        // this function will be called by react-native inside ImageButtonCard.onclick 
        const OnImageButtonClickHandler = (event: GestureResponderEvent) => {
            this.props.dispatchNaviAction(data);
        };
        return OnImageButtonClickHandler; 
    }
    
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.gridRow}>
                    <ImageButtonCard 
                        label="Aries" 
                        imgSource={require("../../assets/img/aries.png")} 
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Aries)}/>
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
});


const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IMapDispatchToProps => {
    return {
        dispatchNaviAction: (data) => dispatch(naviActionCreator(data)),
    };
};

export default connect(null, mapDispatchToProps)(ZodiacGridScreen);
