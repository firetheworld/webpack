import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import { loadConfigs } from 'ldpro-parser/h5/loadable';

const CompomentA = loadConfigs(() => import('./compomentA'));

import Dashboard from './components/Dashboard';

function Loading({ error }) {
    if (error) {
        return 'Oh nooess!';
    } else {
        return <h3>Loading...</h3>;
    }
}

const Settings = CompomentA;

const AddUser = Loadable({
    loader: () => import('./components/AddUser'),
    loading: Loading
});

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">Dashboard</Link>
                    <Link to="/settings">Settings</Link>
                    <Link to="/add-user">Add User</Link>

                    <Route exact path="/" component={Dashboard} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/add-user" component={AddUser} />
                </div>
            </Router>
        );
    }
}

export default App;
