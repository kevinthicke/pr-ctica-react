import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import Movies from './pages/Movies';

export default class App extends React.Component {
    render() {
        return <Router>
            <div>
                <Header/>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/movies' component={Movies}/>
                </div>
        </Router>;
    }
}