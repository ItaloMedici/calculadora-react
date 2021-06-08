import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
    <span>By<br/><strong>Médici</strong></span>
  </div>
  , document.getElementById('root')
);

reportWebVitals();
