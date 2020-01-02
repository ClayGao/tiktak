import React from 'react';
import Todolist from '../components/wrapper/todolist/index'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/todolist'


// For Todolist
const TodolistConatainers = (props) => <Todolist {...props} />

const mapStateToProps = (store) => {
    return {
      todolistData: store.getTodolistDataReducer.todolistData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getTodolistData : () => {dispatch(actions.getTodolistData())},
      postTodolistData : (inputData) => {
        dispatch(actions.postTodolistData(inputData))
      },
      deleteTodolistData : (taskId) => {
        dispatch(actions.deleteTodolistData(taskId))
      }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodolistConatainers))
