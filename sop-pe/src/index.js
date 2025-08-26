import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import allReducer from './Reducer';
import { AuthProvider } from './Context/AuthContext'; 


const store = createStore(allReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>
  </AuthProvider>


);

reportWebVitals();
