import { put, takeLatest } from 'redux-saga/effects';

import { messagesLoaded } from '../actions';

const messageDetails = {
    '2': [
        {
            id: '9',
            imageUrl: null,
            imageAlt: null,
            messageText: 'zomentum ka paper de raaha hai',
            createdAt: 'Oct 20',
            isMyMessage: true
        },
        {
            id: '8',
            imageUrl: require('../../images/profiles/ankit.jpg'),
            imageAlt: 'Kim O\'Neil',
            messageText: `ha bhai 10 lakh de rahi hai`,
            createdAt: 'Oct 20',
            isMyMessage: false
        },
        {
            id: '7',
            imageUrl: null,
            imageAlt: null,
            messageText: 'stipened 35000 hai',
            createdAt: 'Oct 19',
            isMyMessage: true
        },
        {
            id: '6',
            imageUrl: require('../../images/profiles/ankit.jpg'),
            imageAlt: 'Kim O\'Neil',
            messageText: `bangalore me hai`,
            createdAt: 'Oct 19',
            isMyMessage: false
        },
        {
            id: '5',
            imageUrl: null,
            imageAlt: null,
            messageText: `Assesment diya hai frontend ka`,
            createdAt: 'Oct 19',
            isMyMessage: true
        },
        {
            id: '4',
            imageUrl: require('../../images/profiles/ankit.jpg'),
            imageAlt: 'Kim O\'Neil',
            messageText: `ha maine  react pe kafi website banayi hai`,
            createdAt: 'Oct 19',
            isMyMessage: false
        },
        {
            id: '3',
            imageUrl: null,
            imageAlt: null,
            messageText: 'narang suits ki frontend maine kari thi',
            createdAt: 'Oct 19',
            isMyMessage: true
        },
        {
            id: '2',
            imageUrl: require('../../images/profiles/ankit.jpg'),
            imageAlt: 'Kim O\'Neil',
            messageText: 'chalo badiya hai',
            createdAt: 'Oct 19',
            isMyMessage: false
        },
        {
            id: '1',
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hello ji!!',
            createdAt: 'Oct 19',
            isMyMessage: true
        }
    ],
    '3': [
        {
            id: '1',
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '4': [
        {
            id: '1',
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '5': [
        {
            id: '1',
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '6': [
        {
            id: '1',
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '7': [
        {
            id: '1',
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '8': [
        {
            id: '1',
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ],
    '9': [
        {
            id: '1',
            imageUrl: null,
            imageAlt: null,
            messageText: 'Hi',
            createdAt: '1 week ago',
            isMyMessage: true
        }
    ]
};

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const messagesSaga = function*(action) {
    const { conversationId, numberOfMessages, lastMessageId } = action.payload;
    const messages = messageDetails[conversationId];
    const startIndex = lastMessageId ? messages.findIndex(message => message.id === lastMessageId) + 1: 0;
    const endIndex = startIndex + numberOfMessages;
    const pageGroup = messages.slice(startIndex, endIndex);
    const newLastMessageId = pageGroup.length > 0 ? pageGroup[pageGroup.length - 1].id: null;
    const hasMoreMessages = newLastMessageId && endIndex < (messages.length - 1);

    yield delay(1000);

    yield put(messagesLoaded(
        conversationId,
        pageGroup,
        hasMoreMessages,
        newLastMessageId
    ));

    if (hasMoreMessages) {
        yield delay(1000);
        yield put({
            type: 'MESSAGES_REQUESTED',
            payload: {
                conversationId,
                numberOfMessages,
                lastMessageId: newLastMessageId
            }
        })
    }
}

export const watchGetMessagesAsync = function*() {
    yield takeLatest('MESSAGES_REQUESTED', messagesSaga);
}