/*

File: Index.js

Desc: File to manage state of mobile flashcards application

Author: Gene Da Rocha

Project3: Udacity Mobile Flash Cards Project 

Date: 10th August 2020

*/
import {PICK_DECKS, NEW_ADD_CARD, NEW_ADD_DECK} from '../actions/index' 

export default function decks (state={}, action){
    let decks={}

    switch(action.type){
        case PICK_DECKS:
            decks={
                ...state,
                ...action.decks
            }
            return decks
        case NEW_ADD_DECK:
                const newDeck = {
                        [action.deck]:{
                                title: action.deck,
                                questions:[]
                        }
                }
                return {
                    ...state,
                    ...newDeck
                }
        case NEW_ADD_CARD:
                const { deckId, card} = action
                return{
                    ...state,
                    [deckId]:{
                        ...state[deckId],
                        questions: state[deckId].questions.concat([card])
                    }
                }
        default:
            return state
    }
}