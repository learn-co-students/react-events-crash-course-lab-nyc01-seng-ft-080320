import React from 'react';
import './index.css';
import { init } from './canvasHelpers'
import ChromeBoisDomain from './ChromeBoisDomain.js'

init()

class App extends React.Component {



    render() {
        return (<ChromeBoisDomain/>)
    }
}

export default App;