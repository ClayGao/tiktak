import * as actionTypes from './actionTypes'

export const getWeatherData = () => {
    return {
        type: actionTypes.GET_WEATHER_DATA,
    }
}

export const getWeatherDataDone = (data) => {
    return {
        type: actionTypes.GET_WEATHER_DATA_SUCCESS,
        data
    }
}

