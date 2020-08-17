import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

  import ListofDecks from './components/ListofDecks'
  import NewDeck from './components/NewDeck'
  import Deck from './components/Deck'
  import TheQuiz from './components/TheQuiz'
  import AddCard from './components/AddCard'
  import { createAppContainer } from 'react-navigation'
  import { createBottomTabNavigator } from 'react-navigation-tabs'
  import { createStackNavigator } from 'react-navigation-stack'
  import { Ionicons } from '@expo/vector-icons'
  import { setLocalNotification } from './utils/helper'
  import {Provider} from 'react-redux'
  import {createStore} from 'redux'
  import reducer from './reducers'
  import middleware from './middleware'

  export const Tabs = createAppContainer(
    createBottomTabNavigator({
      ListofDecks: {
        screen: ListofDecks,
        navigationOptions: {
          tabBarLabel: 'List of Decks',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-list-box" size={30} color={tintColor} />
          ),
        },
      },
      AddDeck: {
        screen: NewDeck,
        navigationOptions: {
          tabBarLabel: 'New Deck',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-add-circle" size={30} color={tintColor} />
          ),
        },
      },
    },{
    tabBarOptions:{
      activeTintColor: '#7b68ee',
    }
    })
  );
export const MainNavigator = createAppContainer(
    createStackNavigator({
      Welcome: {
        screen: Tabs,
      },

      Deck: {
        screen: Deck,
        navigationOptions: {
          headerTintColor: '#000',
          title: 'Deck Details',
          headerStyle:{
            backgroundColor: '#00FF00'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
      TheQuiz: {
        screen: TheQuiz,
        navigationOptions: {
          headerTintColor: '#000',
          title: 'Quiz',
          headerStyle:{
            backgroundColor: '#00FF00'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
      AddCard: {
        screen: AddCard,
        navigationOptions: {
          headerTintColor: '#000',
          title: 'Add Card',
          headerStyle:{
            backgroundColor: '#00FF00'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      },
    })
  );

  class App extends Component {

    componentDidMount () {
      setLocalNotification()
    }
  
    render() {
      const store = createStore(reducer, middleware)
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
        </Provider>
      )
    }
  }
  export default App;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 8,
    }
  })


;
