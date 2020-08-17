Mobile_FlashCards
A Flashcard app similar to Anki. Users can create decks of flash-cards and quiz themselves. A local device push-notification reminds the user to study daily at a specified time the user sets. Built to study React Native.

This project was bootstrapped with Create React Native App.

This app was built for ios devices and was tested on an iphone 7 via the xcode simulator.

Requirements
This project requires Node v6 or later on your machine and yarn or npm v3, or v4. I used yarn to be on the safe side as npm v5 will create errors.

To install yarn please see (https://yarnpkg.com/lang/en/docs/install/)

The install steps below rely on xcode being installed on your machine. To view the app in another device or simulator please refer to the documentation Here.

This project uses Expo to assit with device simulation to learn more about device simulation options with Expo please refer to the documentation Here.

Application Functionality
Decks List Screen
The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.

Pressing on a deck in the list the app should route to an individual deck view.

New Deck Screen
The view includes:

a form for creating a new deck.
an input for the title and a 'Create Deck' button.
Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.

Deck View Screen
The individual deck view includes:

The deck title
Number of cards in the deck
Option to start a quiz for that deck
Option to add a new question to the deck
New Question Screen
The New Question view includes:

a form with fields for a question
and answer, and a submit button.
Submitting the form correctly adds the question to the deck.

Quiz Screen
The Quiz view starts with a question from the selected deck.
The question is displayed, along with a button to show the answer.
Pressing the 'Show Answer' button displays the answer.
Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
The view displays the number of questions remaining.
When the last question is answered, a score is displayed.
When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.

Install steps
$ git clone https://github.com/NoraLou/Mobile-FlashCards

$ cd Mobile-FlashCards

$ yarn

$ yarn start

(to run in an xcode simulator on iphone ) 

Notes Tested only on iOS simulator

CRITERIA
MEETS SPECIFICATIONS
Is the application easy to install and start?

The application requires only yarn install and yarn start to install and launch. npm can be used in place of yarn.

Does the application include a README with clear installation and launch instructions?

A README is included with the project. The README includes clear instructions for installing and launching the project.

Application Functionality

CRITERIA
MEETS SPECIFICATIONS
Is the initial view a Deck List view?

The primary view, seen when the app loads, is a list of created decks which includes the name of each deck and the number of cards.

Does the Deck List view function correctly?

Pressing on a deck in the list should generate an animation, and the app should route to an individual deck view.

Does the Individual Deck view display the correct information?

The individual deck view includes (at a minimum):

The deck title
Number of cards in the deck
Option to start a quiz for that deck
Option to add a new question to the deck
Does the Individual Deck view function correctly?

Pressing the 'Start a Quiz' or 'Add Card' button properly routes to the correct views for those activities.

Does the New Question view function correctly?

The New Question view includes a form with fields for a question and answer, and a submit button.

Submitting the form correctly adds the question to the deck.

Does the Quiz View function correctly?

The Quiz view starts with a question from the selected deck.
The question is displayed, along with a button to show the answer.
Pressing the 'Show Answer' button displays the answer.
Buttons are included to allow the student to mark their guess as 'Correct' or 'Incorrect'
The view displays the number of questions remaining.
When the last question is answered, a score is displayed. This can be displayed as a percentage of correct answers or just the number of questions answered correctly.
When the score is displayed, buttons are displayed to either start the quiz over or go back to the Individual Deck view.
Both the 'Restart Quiz' and 'Back to Deck' buttons route correctly to their respective views.
Does the New Deck view work correctly?

The view includes a form for creating a new deck - which should just be an input for the title and a 'Create Deck' button.

Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.

Does the user receive a notification at a particular time if they haven't studied that day?

Logic for notification has been implemented. Notifications are generated at a specific time if the user hasn't completed at least one quiz for that day.

Does the app function correctly in either Android or iOS?

The app works correctly in either Android OR iOS devices (or emulator).

Project README identifies which platform(s) have been tested.
