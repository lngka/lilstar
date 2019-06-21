import React, { Component, Dispatch } from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import { testActionCreator } from '../../store/actions/actionCreatorIndex'
import { AnyAction } from "redux";

interface IMapStateToProps {}

interface IMapDispatchToProps {
    onTestRedux: () => void;
}

interface Props extends IMapStateToProps, IMapDispatchToProps {
    exampleProp: boolean;
}

class MiscScreen extends Component<Props> {
    onTestPress = () => {
        console.log("Test");
        this.props.onTestRedux();
    }
    render () {
        return (
            <View style={styles.container}>
                <Text>MiscScreen</Text>
                <Button title="Test" onPress={this.onTestPress}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: (Platform.OS == "ios") ? 35 : 0,
    }
});

// const mapStateToProps = state => {
//     return {
//         isLoading: state.ui.isLoading,
//         placeAdded: state.places.placeAdded
//     };
// };
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IMapDispatchToProps => {
    return {
        onTestRedux: () => dispatch(testActionCreator()),
    };
};
  
export default connect(null, mapDispatchToProps)(MiscScreen);
