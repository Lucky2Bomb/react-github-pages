import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../reducers/reposReducer';
import "./App.scss";
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './main/Main';

const App = () => {
    const dispatch = useDispatch();
    return (
        <div className="app">
            <BrowserRouter>
                <div className="container">
                    <Route path="/" component={Main} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;