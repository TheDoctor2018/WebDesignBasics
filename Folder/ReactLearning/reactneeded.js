/*Need for react to work*/
import React from 'react';
import { ReactDOM } from 'react-DOM/client';

import App from './App.js'
ReactDOM.createRoot(
    document.querySelector('#root')

).render(<App />) //Render root component, needed for react to work
