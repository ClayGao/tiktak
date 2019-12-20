import React, { useState, useEffect } from 'react';
import Weather from '../components/wrapper/weather/index'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/actions'
import * as WebAPI from '../WebAPI'

// For weather
const WeatherConatainers = (props) => <Weather {...props} />

const mapStateToProps = (store) => {
    return {
        weatherData: store.getWeatherDataReducer.weatherData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeatherData: () => { 
            dispatch(actions.getWeatherData()) 
            WebAPI.getWeatherDataAPI()
            .then(res => dispatch(actions.getWeatherDataDone(res)))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WeatherConatainers))