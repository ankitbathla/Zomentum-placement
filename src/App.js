import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ChatShell from './containers/shell/ChatShell';

const App = () => {
  return (
    <BrowserRouter>
    <ChatShell />
    </BrowserRouter>
  );
}

export default App;
