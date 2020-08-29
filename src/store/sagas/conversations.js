import { put, takeEvery } from 'redux-saga/effects';

import { messagesLoaded } from '../actions';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const conversations = [
    { 
        id: '1',
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'Ankit Bathla',
        title: 'Ankit Bathla',
        createdAt: 'Apr 16',
        latestMessageText: 'This is a message',
        messages: [
            {
                imageUrl: null,
                imageAlt: null,
                messageText: 'Ok then',
                createdAt: 'Apr 16',
                isMyMessage: true
            },
            {
                imageUrl: null,
                imageAlt: null,
                messageText: 'How\'s it going?',
                createdAt: 'Apr 13',
                isMyMessage: true
            },
            {
                imageUrl: require('../../images/profiles/ankit.jpg'),
                imageAlt: 'Daryl Duckmanton',
                messageText: ' Hey mate what\'s up?',
                createdAt: 'Apr 13',
                isMyMessage: false
            },
            {
                imageUrl: null,
                imageAlt: null,
                messageText: 'Hey Ankit bathla?',
                createdAt: 'Apr 13',
                isMyMessage: true
            },
            {
                imageUrl: null,
                imageAlt: null,
                messageText: 'Ok then',
                createdAt: 'Apr 16',
                isMyMessage: true
            }
        ]
    },
    {
        id: '2', 
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'rohan',
        title: 'rohan',
        createdAt: 'Oct 20',
        latestMessageText: ' hmm',
        messages: []
    },
    {
        id: '3', 
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'srijan',
        title: 'srijan',
        createdAt: '1 week ago',
        latestMessageText: 'Yes',
        messages: []
    },
    { 
        id: '4',
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'rohan',
        title: 'rohan',
        createdAt: '2:49 PM',
        latestMessageText: 'hello',
        messages: []
    },
    { 
        id: '5',
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'Rishabh',
        title: 'Rishabh',
        createdAt: '6:14 PM',
        latestMessageText: 'happy birthday',
        messages: []
    },
    { 
        id: '6',
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'Aayush',
        title: 'Aayush',
        createdAt: '3 secs ago',
        latestMessageText: 'thank you',
        messages: []
    },
    { 
        id: '7',
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'srijan',
        title: 'srijan',
        createdAt: '30 mins ago',
        latestMessageText: 'zomentum',
        messages: []
    },
    { 
        id: '8',
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'Aman',
        title: 'Aman',
        createdAt: '1 week ago',
        latestMessageText: ' badiya',
        messages: []
    },
    { 
        id: '9',
        imageUrl: require('../../images/profiles/ankit.jpg'),
        imageAlt: 'Anisha',
        title: 'Anisha',
        createdAt: '1 year ago',
        latestMessageText: 'Thank you',
        messages: []
    }
];

export const conversationsSaga = function*() {
    yield delay(1000);
    yield put(messagesLoaded(conversations[0].id, conversations[0].messages, false, null));

    yield put({
        type: 'CONVERSATIONS_LOADED',
        payload: {
            conversations,
            selectedConversation: conversations[0]
        }
    });
}

export function* watchGetConversationsAsync() {
    yield takeEvery('CONVERSATIONS_REQUESTED', conversationsSaga);
}