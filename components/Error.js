import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from "react-native";
import Button from "react-native-button";
import {Actions, ActionConst} from "react-native-router-flux";

var {
  height: deviceHeight
} = Dimensions.get("window");

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"transparent",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default class extends React.Component {
    constructor(props){
        super (props);

        this.state = {
            visible: false,
            offset: new Animated.Value(-deviceHeight)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({visible: nextProps.visible});
        }
    }

    componentDidMount() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: 0
        }).start();
    }

    _action(sceneKey) {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: -deviceHeight
        }).start(() => {
            this.setState({visible: false});
            Actions[sceneKey]
        })
    }

    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: -deviceHeight
        }).start(Actions.pop);
    }

    render(){

        const {visible} = this.state
        console.log('ERROR', visible)

        return (visible) ? (
            <Animated.View style={[styles.container, {backgroundColor:"rgba(52,52,52,0.5)"},
                                  {transform: [{translateY: this.state.offset}]}]}>
                <View style={{  width:250,
                                height:250,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor:"white" }}>
                    <Text>{this.props.data}</Text>
                    <Button onPress={this.closeModal.bind(this)}>Close</Button>
                    <Button onPress={this._action.bind(this, 'register2')}>Go to another page</Button>
                </View>
            </Animated.View>
        ) : null;
    }
}
