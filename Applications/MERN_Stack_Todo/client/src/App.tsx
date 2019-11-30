import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import ListTodo from './components/ListTodo.component';
import EditTodo from './components/EditTodo.component';
import CreateTodo from './components/CreateTodo.component';

import logo from './icons/logo.png';

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="http://localhost:3000">
                            <img src={ logo } height="30"
                            width="30" alt="Application logo"/>
                        </a>
                        <Link to="/" className="navbar-brand">MEAN Stack Todo App</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Todos</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Todo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br />
                    <Route path="/" exact component={ ListTodo } />
                    <Route path="/edit/:id" component={ EditTodo } />
                    <Route path="/create" component={ CreateTodo } />
                    <footer>
                        <div>
                            Icons made by <a
                                href="https://www.flaticon.com/authors/freepik"
                                title="Freepik">
                                Freepik
                            </a> from <a
                                href="https://www.flaticon.com/"
                                title="Flaticon">
                                www.flaticon.com
                            </a>
                        </div>
                    </footer>
                </div>
            </Router>
        );
    }

}
