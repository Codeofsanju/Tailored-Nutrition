'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    TouchableHighlight,
    Image,
} from 'react-native';

import SignUp from './SignUp'

export default class Welcome extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
        isPressed: 'false'
        };
    }
    render() {
        console.log('Welcome.render');
        return (
                <View style={styles.container}>
                <Text style={styles.description}>
                Welcome, (insert name here)!
                </Text>
                <Text style={styles.description}>
               It is time to create some more logs to keep a healthy life!
                </Text>
                
                <TouchableHighlight
                onPress={this._onButtonPressed}>
                <Image source={require('./Resources/start.png')} style={styles.image}/>
                </TouchableHighlight>


                
                
                </View>
                );
    }
    _onButtonPressed = () => {
        this.setState({ isPressed: true });
        this.props.navigation.navigate('SignUp');
    };
//////////////////////////////////////////


const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    image: {
        height: 182 / 4,
        width: 995 / 4,
        marginTop: 20,
    },
});