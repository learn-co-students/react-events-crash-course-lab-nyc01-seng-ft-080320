import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { init } from './canvasHelpers'

init()

ReactDOM.render(<App />, document.getElementById('root'));
