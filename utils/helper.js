/*

File: helper.js

Desc: File to work and deal with AsynchStorage and ensure notification is in place. 

Author: Gene Da Rocha

Project3: Udacity Mobile Flash Cards Project 

Date: 10th August 2020

*/
import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'flashCards:notification'

export function clearLocalNotification () {
return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
return {
    title: 'Lets study with us!',
    body: "👋 don't forget to test your info today!",
    ios: {
    sound: true,
    },
    android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
    }
}
}

export function setLocalNotification () {
AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
    if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
            if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(12)
            tomorrow.setMinutes(0)

/*            Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                time: tomorrow,
                repeat: 'day',
                }
            )
            */
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
        })
    }
    })
}