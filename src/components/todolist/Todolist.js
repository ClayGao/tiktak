import React, { useState, useEffect } from 'react';
import { Loader, Form, TextArea, Button, Input, Icon, Radio } from 'semantic-ui-react'
import options from './cityOptions'
import {
    TodolistWrapper,
    TodolistBlockContent,
    TodoBlock,
    DoneBlock,
    TodolistCardContent,
    TodolistMainContext,
    TodolistTitle,
    TodolistContent,
    TodolistOptionsBar,
    TodolistAddressBlock,
    TodolistPlace,
    TodolistSubPlace,
    TodolistBarContent,
    BeMiddle,
    TodolistEditingContent
} from './TodolistSetting'


// Todolist Navigation Bar
const TodolistBar = (props) => (
        <TodolistBarContent>
            <Button animated='vertical' onClick={props.handleEditing}>
                <Button.Content hidden>Add</Button.Content>
                <Button.Content visible>
                    <Icon name='add' />
                </Button.Content>
            </Button>
        </TodolistBarContent>
    )

const TodolistEditingBlock = (props) => {

    const [taskInput, setTaskInput] = useState({
        todoTitle: '',
        todoContext: '',
        todoPlace: '',
        todoSubPlace: '',
        todoLevel: 'common',
        todoStatus: 0,
    })

    // 利用 props 傳下來的 name 與 value 取代 e.target
    const handleInputChange = (e, {name, value}) => setTaskInput({
        ...taskInput,
        [name]: value
    })

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
                        <label>Level</label>
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
                    <Form.Group >
                        <Form.Select 
                            name="todoPlace"
                            options={options} 
                            label="City"
                            placeholder='Place' 
                            onChange={handleInputChange}
                            value={taskInput.todoPlace}
                        />
                        <Form.Field
                            id='form-input-control-road-name'
                            control={Input}
                            label='Street'
                            placeholder='Remember to do it!'
                            name="todoSubPlace"
                            onChange={handleInputChange}
                            value={taskInput.todoSubPlace}
                        />
                    </Form.Group>
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Send'
                        onClick={()=>{
                            props.handlePost(taskInput)
                        }}
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

// Todolist 主體
const Todolist = (props) => {

    const [isInputing, setIsInputing] = useState(false)

    const handleEditing = () => {
        setIsInputing(!isInputing)
    }

    // 完成
    const handleComplete = (taskId) => {
        props.patchTodolistData(taskId)
    }

    // 編輯


    // 貼文
    const handlePost = (inputTask) => {
        if(!inputTask.todoTitle) {
            alert('請輸入標題！')
        } else {
            props.postTodolistData(inputTask)
            setIsInputing(false)
        }
    }
    
    // 刪除
    const handleDelete = (taskId) => {
        props.deleteTodolistData(taskId)
    }


    useEffect(() => {
        props.getTodolistData()
    },[])

    const todolistData = props.todolistData.data

    
    console.log(props.todolistData.data)

    return (
        <TodolistWrapper isInputing={isInputing}>
        {isInputing && <TodolistEditingBlock handleEditing={handleEditing} handlePost={handlePost} />}
        <TodolistBlockContent>
            <TodolistBar handleEditing={handleEditing} isInputing={isInputing} />
            <TodoBlock>
                {!todolistData? 'loading' : 
                    todolistData.map(item=>{
                        if(!item.todoStatus) {
                            return (<TodolistCard
                                isComplete={item.todoStatus}
                                todoId={item.todoID}
                                todoTitle={item.todoTitle}
                                todoContext={item.todoComment}
                                todoPlace={item.todoPlace}
                                todoSubPlace={item.todoSubPlace}
                                handleDelete={handleDelete}
                                handleComplete={handleComplete}
                            />)
                        }
                    })}
            </TodoBlock>
            <DoneBlock>
                {!todolistData? 'loading' : 
                    todolistData.map(item=>{
                        if(item.todoStatus) {
                            return ( <TodolistCard
                                isComplete={item.todoStatus}
                                todoId={item.todoID}
                                todoTitle={item.todoTitle}
                                todoContext={item.todoComment}
                                todoPlace={item.todoPlace}
                                todoSubPlace={item.todoSubPlace}
                                handleDelete={handleDelete}
                            />)
                        }
                    })}
            </DoneBlock>
        </TodolistBlockContent>
        </TodolistWrapper>
    )
}

const TodolistCard = (props) => {
    
    const markButton = <Button 
        animated='vertical'
        href={`https://www.google.com.tw/maps?q=${props.todoPlace+props.todoSubPlace}`}
        target="_blank"
        >
        <Button.Content hidden>Position</Button.Content>
        <Button.Content visible>
            <Icon name='map marker alternate' />
        </Button.Content>
    </Button> 

    const checkButton = <Button animated='vertical' 
        onClick={()=>props.handleComplete(props.todoId)}>
        <Button.Content hidden>Check</Button.Content>
        <Button.Content visible>
            <Icon name='checkmark' />
        </Button.Content>
    </Button>

    return (
        <TodolistCardContent id={props.todoID}>
            <TodolistMainContext>
                <TodolistTitle>
                    {props.todoTitle}
                </TodolistTitle>
                {props.todoContext ? 
                <TodolistContent>
                    {props.todoContext}
                </TodolistContent> : null}
            </TodolistMainContext>
            <TodolistAddressBlock todoPlace={props.todoPlace}>
                <TodolistPlace>
                    {props.todoPlace}
                </TodolistPlace>
                <TodolistSubPlace>
                    {props.todoSubPlace}
                </TodolistSubPlace>
            </TodolistAddressBlock>
            <TodolistOptionsBar>
                { props.todoPlace && markButton } 
                <Button animated='vertical'>
                    <Button.Content hidden>Edit</Button.Content>
                    <Button.Content visible>
                        <Icon name='edit' />
                    </Button.Content>
                </Button>
                { !props.isComplete && checkButton } 
                <Button animated='vertical' 
                    onClick={()=>props.handleDelete(props.todoId)}>
                    <Button.Content hidden>Delete</Button.Content>
                    <Button.Content visible>
                        <Icon name='delete' />
                    </Button.Content>
                </Button>
            </TodolistOptionsBar>
        </TodolistCardContent>
    )
}

export default Todolist

