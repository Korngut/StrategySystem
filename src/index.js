import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeatMapScreen from './HeatMapScreen';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeatMapScreen />
  </React.StrictMode>
);

reportWebVitals();
