import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './Context/reducer';
import { UserProvider } from './Context/userProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={initialState} reducer={reducer}>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
