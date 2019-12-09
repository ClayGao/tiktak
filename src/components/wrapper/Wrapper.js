import React, { useState } from 'react';
import { Segment, Menu, Icon } from 'semantic-ui-react'
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>This is a Dashboard</div>
    )
}

const Weather = () => {
    return (
        <div>This is a Weather messages</div>
    )
}

const Todolist = () => {
    return (
        <div>This is a Todo-list</div>
    )
}

const Wrapper = () => (
    <div>
        <Route path="/" exact component={Dashboard} />
        <Route path="/weather" component={Weather} />
        <Route path="/todolist" component={Todolist} />
    </div>
        
)

export default Wrapper