import React, { useState, useEffect } from 'react';
import { Loader, Button, Input } from 'semantic-ui-react'
import styled from 'styled-components'

const TodolistBar = (props) => {

    const [isInputing, setIsInputing] = useState(false)

    const TodolistBar = styled.nav`
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: start;
        border-radius: 10px;
        background-color: gray;
        height: 60px;
    `

    console.log(isInputing)

    return (
        <TodolistBar>
            <Button onClick={()=>{setIsInputing(!isInputing)}}>New</Button>
            { isInputing ? <Input style={{marginLeft:'10px'}}placeholder= 'Add new Task' /> : null }
        </TodolistBar>
    )
}


const TodolistCard = (props) => {

    const TodolistCard = styled.div`
        margin-bottom: 20px;
        padding: 8px;
        height: auto;
        width: auto;
        border-radius: 8px;
        background-color: gold;
    `

    const TodolistTitle = styled.div`
        padding: 8px;
        height: auto;
        min-width: 100px;
        width: 200px;
        border-radius: 8px;
        background-color: #BBFF66;
    `

    const TodolistContent = styled.div`
        margin-top: 10px;
        padding: 8px;
        height: auto;
        width: 200px;
        border-radius: 8px;
        background-color: dimgray;
        color: whitesmoke;
    `

    return (
        <TodolistCard>
            <TodolistTitle>
                {props.taskTitle}
            </TodolistTitle>
            <TodolistContent>
                {props.taskContent}
            </TodolistContent>
        </TodolistCard>
    )
}

const Todolist = (props) => {

    const TodolistContent = styled.div`
        
    `

    const TodoBlock = styled.div`
        margin-top: 30px;
        padding: 20px;
        min-height: 300px;
        height: auto;
        background-color: wheat;
        border-radius: 10px;
    `

    const DoneBlock = styled.div`
        margin-top: 30px;
        padding: 20px;
        min-height: 300px;
        height: auto;
        background-color: grey;
        border-radius: 10px;
    `

    useEffect(() => {
        props.getTodolistData()
        //console.log(props.todolistData.data)
    },[])

    const todolistData = props.todolistData.data
    console.log(todolistData)

    return (
        <TodolistContent>
            <TodolistBar />
            <TodoBlock>
                {!todolistData? 'loading' : 
                    todolistData.map(item=>{
                        if(!item.todoStatus) {
                            return (
                                <TodolistCard
                                    taskTitle={item.todoTitle}
                                    taskContent={item.todoComment}
                                />
                            )
                        }
                    })}
            </TodoBlock>
            <DoneBlock>
                {!todolistData? 'loading' : 
                    todolistData.map(item=>{
                        if(item.todoStatus) {
                            return (
                                <TodolistCard
                                    taskTitle={item.todoTitle}
                                    taskContent={item.todoComment}
                                />
                            )
                        }
                    })}
            </DoneBlock>
        </TodolistContent>
    )
}

export default Todolist

