import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: 'red',
    }
});

class Launch extends React.Component {

    constructor(props) {
        super(props)
        this._showModal = this._showModal.bind(this)
    }

    _showModal() {
        console.log('should show modal')
        Actions.error(message: "Error 123") // this works
        //Actions.refresh({key: "error", visible: true, uniqId: new Date().getTime()}); // does nothing
        //Actions.error(type: "refresh", visible: true, uniqId: new Date().getTime()}); // get error
    }

    render(){
        return (
            <View {...this.props}  style={styles.container}>
            <Text>Launch page</Text>
            <Button onPress={()=>Actions.login({data:"Custom data", title:"Custom title" })}>Go to Login page</Button>
            <Button onPress={Actions.register}>Go to Register page</Button>
            <Button onPress={Actions.register2}>Go to Register page without animation</Button>
            <Button onPress={this._showModal}>Popup error</Button>
            <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
            <Button onPress={Actions.switcher}>Go to switcher page</Button>
            <Button onPress={Actions.pop}>back</Button>
            </View>
        );
    }
}

module.exports = Launch;