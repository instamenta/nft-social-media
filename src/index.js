import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
    reducer: {
        user: userReducer,
    },
})

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Provider>
    </BrowserRouter>
);
reportWebVitals();
