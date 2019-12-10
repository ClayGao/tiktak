import React, { useState, useEffect } from 'react';
import { Card, Segment, Menu, Icon } from 'semantic-ui-react'
import { Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

// For weather
const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
)

const Dashboard = () => {
    return (
        <div>This is a Dashboard</div>
    )
}

const Weather = () => {
    const weatherAuth = 'CWB-8D8B5254-991F-47D6-A679-B8EE1C6CDAE2'
    const weatherDataId = 'F-C0032-001'
    
    useEffect(()=>{const result = axios.get(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/${weatherDataId}?Authorization=${weatherAuth}&format=JSON`)
    console.log(result)
    },[])

    return (
    <Card
        image='/images/avatar/large/elliot.jpg'
        header='Elliot Baker'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        extra={extra}
    />
    )
}

const Todolist = () => {
    return (
        <div>This is a Todo-list</div>
    )
}

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