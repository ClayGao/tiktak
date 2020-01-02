import axios from 'axios'
import qs from 'qs' // 解決後端 php 不能接收 JSON 的問題

export const getWeatherDataAPI = () => {

    const weatherAuth = 'CWB-8D8B5254-991F-47D6-A679-B8EE1C6CDAE2'
    const weatherDataId = 'F-C0032-001'

    return axios(`https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/${weatherDataId}?Authorization=${weatherAuth}&format=JSON`)
}

export const getTodolistDataAPI = () => axios('http://claygao.website/todolist/models/todo_API.php')

export const postTodolistDataAPI = (inputData) => axios.post('http://claygao.website/todolist/models/todo_API.php', qs.stringify(inputData))

export const deleteTodolistDataAPI = (taskId) => axios.delete('http://claygao.website/todolist/models/todo_API.php?taskid='+taskId)

//// http://claygao.website/todolist/models/todo_API.php <=== Todolist API