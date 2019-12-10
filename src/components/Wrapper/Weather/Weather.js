import React, { useState, useEffect } from 'react';
import { Loader, Icon, Grid, Image } from 'semantic-ui-react'
import './Weather.scss'
import axios from 'axios'

// For weather
const extra = (
    <a>
        <Icon name='user' />
        16 Friends
    </a>
)

const Weather = () => {
    const[weatherData, setWeatherData] = useState([])
    const weatherAuth = 'CWB-8D8B5254-991F-47D6-A679-B8EE1C6CDAE2'
    const weatherDataId = 'F-C0032-001'
    
    useEffect(()=> {
        axios(
            `https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/${weatherDataId}?Authorization=${weatherAuth}&format=JSON`
        )
        .then(resp => { 
            setWeatherData(resp.data.cwbopendata.dataset.location)
        })
    },[])

    console.log(weatherData)
    return (
        <div className="weathesr-content">
            {weatherData ?
                weatherData.map(
                    (info,i) => (
                        <Grid celled='internally'>
                            <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Image src='/images/wireframe/centered-paragraph.png' />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Image src='/images/wireframe/image.png' />
                            </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Image src='/images/wireframe/paragraph.png' />
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Image src='/images/wireframe/image.png' />
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    )
                    )
            :
            <Loader active inline='centered' />
            }
        </div>
    )
}

export default Weather