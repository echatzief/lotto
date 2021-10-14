import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import StoreProvider from './components/StoreProvider';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('app'),
);

reportWebVitals();
