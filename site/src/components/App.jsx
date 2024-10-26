import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Opps from './Opps';
import Profile from './Profile';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} /> {/* This will catch any unmatched routes */}
            </Switch>
        </Router>
    );
}

export default App;