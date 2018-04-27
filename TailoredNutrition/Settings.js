import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default class Settings extends Component {
	
	age = {
		inputValue: ""
	};
	
	weight = {
		inputValuer:""
	};
	
	TextChange = inputValue => {
		this.setState({inputValue});
	};
	
	TextModify = inputValuer=> {
		this.setState({inputValuer});
	};
	
  render() {
    return (
		<View style = {styles.container}>
      <Text style = {styles.description}> Old Age </Text>
	  <TextInput 
	  			value = {this.age.inputValue}
				onChangeText = {this.TextChange}
		/>
		<Text> </Text>
	  <Text style = {styles.description}> Old Weight </Text>
	 	<TextInput 
	  			value = {this.weight.inputValuer}
				onChangeText = {this.TextModify}
		/>
	  </View>
    );
  }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 30
    },
    // styling for buttons
    signButton: {
        height: 182 / 4,
        width: 995 / 4,
        marginTop: 20,
   },
    image: {
        height: 182 / 4,
        width: 995 / 4,
    },
	// styling for input fields
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        marginBottom: 10,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
        },
});