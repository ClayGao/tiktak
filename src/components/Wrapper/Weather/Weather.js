import React, { useState, useEffect } from 'react';
import { Loader, Icon, Grid, Image } from 'semantic-ui-react'
import styled from 'styled-components'

// For weather
const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
)

const Weather = (props) => {
    const[weatherData, setWeatherData] = useState([])

    const WeatherContent = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    `
    
    const WeatherCard = styled.div`
        width: 200px;
        height: 600px;
        border: 2px solid black;
    `

    useEffect(()=> {
        props.getWeatherData()
    },[])

    console.log(props.weatherData)

    return (
        <WeatherContent>
            <WeatherCard>

            </WeatherCard>
        </WeatherContent>
    )
}

export default Weather