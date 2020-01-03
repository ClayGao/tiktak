import React from 'react';
import Weather from '../components/weather/index'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/weather'

// For weather
const WeatherConatainers = (props) => <Weather {...props} />

const mapStateToProps = (store) => {
    return {
        weatherData: store.getWeatherDataReducer.weatherData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeatherData: () => { 
            dispatch(actions.getWeatherData())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WeatherConatainers))