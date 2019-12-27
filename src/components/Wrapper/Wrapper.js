import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from '../../containers/DashboardContainer'
import Weather from '../../containers/WeatherContainer'
import Todolist from '../../containers/TodolistContainer'
import styled from 'styled-components'


const Wrapper = () => {

    const MainContent = styled.div`
        
    `

    return (
        <MainContent>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/weather" component={Weather} />
                <Route path="/todolist" component={Todolist} />
            </Switch>
        </MainContent>  
    )
}

export default Wrapper