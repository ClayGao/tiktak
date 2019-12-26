import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

// For weather
const WeatherCard = (props) => {

    const WeatherCard = styled.div`
        margin-top: 30px;
        width: 250px;
        height: 380px;
        border: 2px solid black;
    `

    const WeatherImage = styled.div`
        height: 260px;
        background-color: pink;
    `

    const WeatherInfo = styled.div`
        padding: 10px;
        border-top: 2px solid black;
    `

    const WeatherInfo__Cityname = styled.div`
        font-size: 20px;
        font-weight: bolder;    
    `

    const WeatherInfo__Wind = styled.div`
        margin-top: 3px;
        font-size: 16px;
    `

    return (
        <WeatherCard>
            <WeatherImage>

            </WeatherImage>
            <WeatherInfo>
                <WeatherInfo__Cityname>
                    台北市
                </WeatherInfo__Cityname>
                <WeatherInfo__Wind>
                    80%
                </WeatherInfo__Wind>
            </WeatherInfo>
        </WeatherCard>
    )
}

const Weather = (props) => {
    const[weatherData, setWeatherData] = useState('')

    const WeatherContent = styled.div`
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    `

   useEffect(() => {
       props.getWeatherData()
   },[])
   
   

    console.log(props.weatherData)
    return (
        <WeatherContent>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </WeatherContent>
    )
}

export default Weather