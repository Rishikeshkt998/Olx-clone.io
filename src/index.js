import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {auth} from './firebase/config'
import {FirebaseContext} from './store/FirebaseContext'
import Context from './store/FirebaseContext'

ReactDOM.render(<FirebaseContext.Provider value={{auth}}><Context><App /></Context></FirebaseContext.Provider>, document.getElementById('root'));
