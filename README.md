<!—README  -->



—>  mobileflashcards is a React Native app for IOS which has the facilities for users to create decks, add cards and quiz themselves.


It uses React Native, Expo, Redux, & React Navigation.

This app is the third of three projects required for [Udacity's React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).


## Installation

Clone the repository, change directories, and use npm or yarn to install the dependencies.

echo "# mobileflashcards" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/genedarocha/mobileflashcards.git
git push -u origin master


## Usage

The project can be run with npm or yarn

- `yarn start` or ‘nom start’

This will open Expo Developer Tools in the browser.  You can then do one of the following.

- Use your device to test:

    Scan the QR Code using the Expo Client app ([Expo Client for Android & iOS](https://expo.io/tools#client))  from an Android or iOS device.
- Use an Android Emulator or iOS Simulator to run the app:
    - [iOS Simulator Setup](https://docs.expo.io/versions/v33.0.0/introduction/installation/#ios-simulator)
    - [Android Emulator Setup](https://docs.expo.io/versions/v33.0.0/introduction/installation/#android-emulator)

[GitHub Repo](https://github.com/genedarocha/mobileflashcards/) |


This site contains code notes for how I built project 3 for Udacity Mobile Flash Cards

Rubik Definitions for the project

—> 1. Project Requirements

—> Overview
The assignment is to build a mobile flashcard app from scratch using React Native.

There is no starter code and below is the link to the rubric.

- [Mobile Flashcard Project Specification](https://review.udacity.com/#!/rubrics/1021/view)

—> 1.2 Specific Requirements
Here are the high-level requirements for this app.

- Use [expo-cli] to build the project.
- Allow users to create a deck which can hold an unlimited number of cards.
- Allow users to add a card to a specific deck.
- The front of the card should display the question.
- The back of the card should display the answer.
- Users should be able to quiz themselves on a specific deck and receive a score once they're done.
- Users should receive a notification to remind themselves to study if they haven't already for that day.

—> 1.3 Views

Here are the views needed for this app.

1. DeckList
2. AddDeck
3. Deck (Individual)
4. AddCard
5. Quiz
   - Front (Question)
   - Back (Answer)
   - Results (Upon completion)

—>  1.3.1 DeckList View (Default)

- displays the title of each Deck
- displays the number of cards in each deck

—> 1.3.2 AddDeck View

- An option to enter in the title for the new deck
- An option to submit the new deck title

—>  1.3.3 Deck View

- displays the title of the Deck
- displays the number of cards in the deck
- displays an option to start a quiz on this specific deck
- An option to add a new question to the deck

—> 1.3.4 AddCard View

- An option to enter in the question
- An option to enter in the answer
- An option to submit the new question

—>  1.3.5 Quiz View

- displays a card question
- an option to view the answer (flips the card)
- a "Correct" button
- an "Incorrect" button
- the number of cards left in the quiz
- Displays the percentage correct once the quiz is complete

—>  1.4 Data
App uses Expo's `AsyncStorage` to initialise and create and store the flashcards and decks as needed. The Redux code is not necessary but will be used. 

- Each deck creates a new key on the object.
- Each deck has a `title` and a `questions` key.
- `title` is the title for the specific deck
- `questions` is an array of questions and answers for that deck.

—>  1.5 Helper Methods
To manage your AsyncStorage database, you'll want to create four different helper methods.

- `getDecks`: return all of the decks along with their titles, questions, and answers.
- `getDeck`: take in a single id argument and return the deck associated with that id.
- `saveDeckTitle`: take in a single title argument and add it to the decks.
- `addCardToDeck`: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.