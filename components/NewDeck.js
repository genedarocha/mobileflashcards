/*

File: NewDeck.js

Desc: File to Add a New Deck to the System/Quiz 

Author: Gene Da Rocha

Project3: Udacity Mobile Flash Cards Project 

Date: 10th August 2020

*/

import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native'
import { newDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { withNavigation } from 'react-navigation'

class NewDeck extends Component {

    state = {
        title: ''
    }

    handleSubmit = () => {
    const {title} = this.state
    newDeck(title)
    this.props.dispatch(addDeck(title))
    this.props.navigation.navigate('Deck',{deckId: title})
    this.setState({title: ""})
}
    render() {
        return (
            <View>
                <Text style={styles.paragraph}>Make and Add Decks? </Text>
                <TextInput 
                    style={styles.input}
                    placeholder = "Enter the title of deck "
                    placeholderTextColor = '#d6d7da'
                    onChangeText={( title ) => this.setState({ title })}
                    value={this.state.title} 
                    />
            
                <TouchableOpacity style={styles.button} 
                onPress={this.handleSubmit}>
                <Text style={styles.btnTitle}> Make a New Deck </Text>
            </TouchableOpacity>
            </View>
        )
    }
}
function mapStateToProps (decks){
    return{
        decks
    }
}
export default withNavigation(connect(mapStateToProps)(NewDeck))

const styles = StyleSheet.create({
paragraph: {
    padding: 20,
    margin: 10,
    marginTop:150,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
},
button: {
    alignItems: 'center',
    backgroundColor:'#00FF00',
    padding: 15,
    margin: 10,
    width: 370,
    height:60,
    borderRadius:6,
    justifyContent:'center',
    alignItems:'center'
},
input: {
    margin: 15,
    height: 60,
    borderColor:'#00FF00',
    borderWidth: 1,
    borderRadius:6
},
btnTitle :{
    fontSize: 20,
    textAlign: 'center'
    }
})
