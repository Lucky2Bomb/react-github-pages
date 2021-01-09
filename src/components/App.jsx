import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../reducers/reposReducer';
import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './main/Main';
import RepoDetails from './main/RepoDetails/RepoDetails';

const App = () => {
    const dispatch = useDispatch();
    return (
        <div className="app">
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/repository/:username/:reponame" component={RepoDetails}/>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;