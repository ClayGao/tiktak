import React, { useState, useEffect } from 'react';
import { Loader, Form, TextArea, Button, Input, Icon, Radio } from 'semantic-ui-react'
import styled from 'styled-components'
import  * as WebAPI from '../../../WebAPI'


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

    const [taskInput, setTaskInput] = useState({
        todoTitle: '',
        todoContext: '',
        todoLevel: 'common',
        todoStatus: 0,
    })

    // 利用 props 傳下來的 name 與 value 取代 e.target
    const handleInputChange = (e, {name, value}) => setTaskInput({
        ...taskInput,
        [name]: value
    })

  

    console.log({...taskInput})

    const genderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]

    return (
        <BeMiddle>
            <TodolistEditingContent>
                <Form>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Task Title'
                        placeholder='Remember to do it!'
                        error={{
                            content: 'Please enter a task name',
                            pointing: 'below',
                        }}
                        name="todoTitle"
                        onChange={handleInputChange}
                        value={taskInput.todoTitle}
                    />
                 
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Task Content'
                        placeholder='It is not neccessary'
                        name="todoContext"
                        onChange={handleInputChange}
                        value={taskInput.todoContext}
                    />
                    <Form.Group inline>
                    <label>Quantity</label>
                    <Form.Field
                        control={Radio}
                        label='Common'
                        value='common'
                        name="todoLevel"
                        checked={taskInput.todoLevel === 'common'}
                        onChange={handleInputChange}
                    />
                    <Form.Field
                        control={Radio}
                        label='Important'
                        value='important'
                        name="todoLevel"
                        checked={taskInput.todoLevel === 'important'}
                        onChange={handleInputChange}
                    />
                    <Form.Field
                        control={Radio}
                        label='Record'
                        value='record'
                        name="todoLevel"
                        checked={taskInput.todoLevel === 'record'}
                        onChange={handleInputChange}
                    />
                    </Form.Group>
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Send'
                        onClick={()=>props.handlePost(taskInput)}
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
                {props.todoTitle}
            </TodolistTitle>
            <TodolistContent>
                {props.todoContext}
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

    const handlePost = (inputTask) => {
        props.postTodolistData(inputTask)
    }
    
    const todolistData = props.todolistData.data

    useEffect(() => {
        props.getTodolistData()
    },[])

    

    
    console.log(props)

    return (
        <TodolistWrapper isInputing={isInputing}>
        {isInputing && <TodolistEditingBlock handleEditing={handleEditing} handlePost={handlePost} />}
        <TodolistBlockContent>
            <TodolistBar handleEditing={handleEditing} isInputing={isInputing} />
            <TodoBlock>
                <input type="button" onClick={()=>{handlePost('ar')}} />
                {!todolistData? 'loading' : 
                    todolistData.map(item=>{
                        if(!item.todoStatus) {
                            return (<TodolistCard
                                todoTitle={item.todoTitle}
                                todoContext={item.todoComment}
                            />)
                        }
                    })}
            </TodoBlock>
            <DoneBlock>
                {!todolistData? 'loading' : 
                    todolistData.map(item=>{
                        if(item.todoStatus) {
                            return ( <TodolistCard
                                todoTitle={item.todoTitle}
                                todoContext={item.todoComment}
                            />)
                        }
                    })}
            </DoneBlock>
        </TodolistBlockContent>
        </TodolistWrapper>
    )
}

export default Todolist

