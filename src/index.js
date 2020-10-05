import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { init } from './canvasHelpers'
import App from './App'

init()

ReactDOM.render(<App />, document.getElementById('root'));
