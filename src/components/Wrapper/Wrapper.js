import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard'
import Weather from './Weather'
import Todolist from './Todolist'


const Wrapper = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/weather" component={Weather} />
            <Route path="/todolist" component={Todolist} />
        </Switch>
    </div>  
)

export default Wrapper