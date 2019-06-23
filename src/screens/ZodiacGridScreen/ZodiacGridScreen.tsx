import React, { Component } from "react";
import { View, StyleSheet, Platform, GestureResponderEvent } from "react-native";
import ImageButtonCard from "../../components/ImageButtonCard";
import Zodiacs from "../../models/ZodiacEnum";
import { naviActionCreator } from '../../store/actions/actionCreatorIndex'
import { connect } from "react-redux";
import { NaviActionData } from "../../store/actions/naviActionCreator";
import  ScreenID  from "../ScreenID";
import { Navigation } from "react-native-navigation";

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
    CreateOnImageButtonClickHandler (zo: string) {
        const data = {
            destination: ScreenID.HoroscopeScreen,
            zodiac: zo
        };
        // this function will be called by react-native inside ImageButtonCard.onclick 
        const OnImageButtonClickHandler = (event: GestureResponderEvent) => {
            this.props.dispatchNaviAction(data);

            Navigation.push(ScreenID.ZodiacGridScreen, {
                component: {
                    name: ScreenID.HoroscopeScreen,
                    options: {
                        topBar: {
                            visible: true,
                            title: {
                                text: zo
                            }
                        }
                    }
                }
            });
        };
        
        return OnImageButtonClickHandler; 
    }
    
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.gridRow}>
                    <ImageButtonCard 
                        label={Zodiacs.Aries}
                        imgSource={require("../../assets/img/aries.png")} 
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Aries)}/>
                    <ImageButtonCard 
                        label={Zodiacs.Taurus}
                        imgSource={require("../../assets/img/taurus.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Taurus)}/>
                    <ImageButtonCard 
                        label={Zodiacs.Gemini} 
                        imgSource={require("../../assets/img/gemini.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Gemini)}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard 
                        label={Zodiacs.Cancer}
                        imgSource={require("../../assets/img/cancer.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Cancer)}/>
                    <ImageButtonCard 
                        label={Zodiacs.Leo}
                        imgSource={require("../../assets/img/leo.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Leo)}/>
                    <ImageButtonCard 
                        label={Zodiacs.Virgo}
                        imgSource={require("../../assets/img/virgo.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Virgo)}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard 
                        label={Zodiacs.Libra} 
                        imgSource={require("../../assets/img/libra.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Libra)}/>
                    <ImageButtonCard 
                        label={Zodiacs.Scorpio} 
                        imgSource={require("../../assets/img/scorpio.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Scorpio)}/>
                    <ImageButtonCard 
                        label={Zodiacs.Sagittarius} 
                        imgSource={require("../../assets/img/sagittarius.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Sagittarius)}/>
                </View>
                <View style={styles.gridRow}>
                    <ImageButtonCard 
                        label={Zodiacs.Capricorn}
                        imgSource={require("../../assets/img/capricorn.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Capricorn)}/>
                    <ImageButtonCard 
                        label={Zodiacs.Aquarius} 
                        imgSource={require("../../assets/img/aquarius.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Aquarius)}/>
                    <ImageButtonCard 
                        label={Zodiacs.Pisces}
                        imgSource={require("../../assets/img/pisces.png")}
                        clickHandler={this.CreateOnImageButtonClickHandler(Zodiacs.Pisces)}/>
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

// IMapDispatchToProps enable calling this.props.dispatchNaviAction in class ZodiacGridScreen
// self note:  dispatch is a function which defined by redux
const mapDispatchToProps = (dispatch: any): IMapDispatchToProps => {
    return {
        dispatchNaviAction: (data) => dispatch(naviActionCreator(data)),
    };
};

// selfnote:  connect is from react-redux
// we define logic in mapDispatchToProps and let it do the rest
export default connect(null, mapDispatchToProps)(ZodiacGridScreen);
