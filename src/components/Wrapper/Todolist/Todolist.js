import React, { useState, useEffect } from 'react';
import { Loader, Form, TextArea, Button, Input, Icon, Select } from 'semantic-ui-react'
import styled from 'styled-components'

// main

const TodolistWrapper = styled.div`
    width: 100%;
    position: ${props => props.isInputing ? 'fixed' : 'relative'};
`

const TodolistBlockContent = styled.div`
    margin: 0 auto;
    padding: 30px;
    width: 1200px;
`

const TodoBlock = styled.div`
    margin-top: 30px;
    padding: 20px;
    min-height: 300px;
    height: auto;
    background-color: gray;
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
// Todolist Card
const TodolistCardContent = styled.div`
    position: relative;
    margin-bottom: 20px;
    padding: 8px;
    height: auto;
    width: auto;
    border-radius: 8px;
    background-color: gold;
    box-shadow: 0 0 20px black;
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

const TodolistOptionsBar = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    right: 8px;
    bottom: 8px;
    padding: 1em;
    height: 60px;
    width: 240px;
    border-radius: 8px;
    background-color: gray;
`

// Todolist Navegation Bar
const TodolistBarContent = styled.nav`
padding: 0 20px;
display: flex;
align-items: center;
justify-content: start;
border-radius: 10px;
background-color: gray;
height: 60px;
`

// Todolist Editing Block

const BeMiddle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    touch-action: none;
`

const TodolistEditingContent = styled.div`
    padding: 25px;
    background-color: wheat;
    border-radius: 10px;
    width: 600px;
    height: auto;
`

/* ----------------- */

const TodolistBar = (props) => {

    const [taskInput, setTaskInput] = useState({
        taskTitle: '',
        taskContent: '',
        taskLevel: '',
        taskStatus: 0,
    })

    const handleInputChange = (e) => setTaskInput({
        ...taskInput,
        [e.currentTarget.name]: e.currentTarget.value
    })

    console.log(taskInput)

    return (
        <TodolistBarContent>
            <Button animated='vertical' onClick={props.handleEditing}>
                <Button.Content hidden>Add</Button.Content>
                <Button.Content visible>
                    <Icon name='add' />
                </Button.Content>
            </Button>
        </TodolistBarContent>
    )
}

const TodolistEditingBlock = (props) => {

    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]

    return (
        <BeMiddle>
            <TodolistEditingContent>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Task title'
                            placeholder='Remember to do it!'
                            error={{
                                content: 'Please enter a task name',
                                pointing: 'below',
                            }}
                        />
                    </Form.Group>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Task content'
                        placeholder='It is not neccessary'
                    />
                    <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{ children: 'Task Levels', htmlFor: 'form-select-control-gender' }}
                        placeholder='Task Levels'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
                    <Form.Field
                        control={Select}
                        options={genderOptions}
                        label={{ children: 'Task Levels', htmlFor: 'form-select-control-gender' }}
                        placeholder='Task Levels'
                        search
                        //searchInput={{ id: 'form-select-control-gender' }}
                    />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Send'
                    />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Cancel' 
                        onClick={props.handleEditing}                  
                    />
                </Form>
            </TodolistEditingContent>
        </BeMiddle>
    )
}


const TodolistCard = (props) => {

    return (
        <TodolistCardContent>
            <TodolistTitle>
                {props.taskTitle}
            </TodolistTitle>
            <TodolistContent>
                {props.taskContent}
            </TodolistContent>
            <TodolistOptionsBar>
                <Button animated='vertical'>
                    <Button.Content hidden>Edit</Button.Content>
                    <Button.Content visible>
                        <Icon name='edit' />
                    </Button.Content>
                </Button>
                <Button animated='vertical'>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                        <Icon name='delete' />
                    </Button.Content>
                </Button>
                <Button animated='vertical'>
                    <Button.Content hidden>Position</Button.Content>
                    <Button.Content visible>
                        <Icon name='map marker alternate' />
                    </Button.Content>
                </Button>
            </TodolistOptionsBar>
        </TodolistCardContent>
    )
}

const Todolist = (props) => {

    const [isInputing, setIsInputing] = useState(false)

    const handleEditing = () => {
        setIsInputing(!isInputing)
    }
    
    useEffect(() => {
        props.getTodolistData()
    },[])

    const todolistData = props.todolistData.data
    console.log(todolistData)

    return (
        <TodolistWrapper isInputing={isInputing}>
        {isInputing && <TodolistEditingBlock handleEditing={handleEditing} />}
        <TodolistBlockContent>
            <TodolistBar handleEditing={handleEditing} isInputing={isInputing} />
            <TodoBlock>
                {!todolistData? 'loading' : 
                    todolistData.map(item=>{
                        if(!item.todoStatus) {
                            return (<TodolistCard
                                taskTitle={item.todoTitle}
                                taskContent={item.todoComment}
                            />)
                        }
                    })}
            </TodoBlock>
            <DoneBlock>
                {!todolistData? 'loading' : 
                    todolistData.map(item=>{
                        if(item.todoStatus) {
                            return ( <TodolistCard
                                taskTitle={item.todoTitle}
                                taskContent={item.todoComment}
                            />)
                        }
                    })}
            </DoneBlock>
        </TodolistBlockContent>
        </TodolistWrapper>
    )
}

export default Todolist

