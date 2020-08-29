import { all } from 'redux-saga/effects';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

import { watchGetConversationsAsync } from './conversations';
import { watchGetMessagesAsync } from './messages';

export default function* rootSaga() {
    yield all([
        watchGetConversationsAsync(),
        watchGetMessagesAsync()
    ]);
}