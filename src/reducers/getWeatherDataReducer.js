import { GET_WEATHER_DATA, GET_WEATHER_DATA_SUCCESS} from '../actions/actionTypes'

const initState = {
    isLoading: false,
    weatherData : [],
}

export const getWeatherDataReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_WEATHER_DATA:
            return {
                ...state,
                isLoading: true
            }
        case GET_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                weatherData: action.data,
            }
        default:
            return state
    }
}
