import axios from 'axios'

export const getWeatherDataAPI = () => {

    const weatherAuth = 'CWB-8D8B5254-991F-47D6-A679-B8EE1C6CDAE2'
    const weatherDataId = 'F-C0032-001'

    return axios(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/${weatherDataId}?Authorization=${weatherAuth}&format=JSON`)
}


