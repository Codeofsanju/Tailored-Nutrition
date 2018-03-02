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
import Questionaire from './Questionaire'

export default class SearchPage extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
        isPressed: 'false'
        };
    }
    render() {
        console.log('SearchPage.render');
        return (
                <View style={styles.container}>
                <Text style={styles.description}>
                Welcome to Tailored Nutrition!
                </Text>
                <Text style={styles.description}>
                Get started by answering just a few questions
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
        this.props.navigator.push({
                                  title: 'Questions',
                                  component: Questionaire,
                                  });
    };
}


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
                                 },
                                 });