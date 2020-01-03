import styled from 'styled-components'

// main

export const TodolistWrapper = styled.div`
    width: 100%;
    position: ${props => props.isInputing ? 'fixed' : 'relative'};
`

export const TodolistBlockContent = styled.div`
    margin: 0 auto;
    padding: 30px;
    width: 1200px;
`

export const TodoBlock = styled.div`
    margin-top: 30px;
    padding: 20px;
    min-height: 300px;
    height: auto;
    background-color: gray;
    border-radius: 10px;
`

export const DoneBlock = styled.div`
    margin-top: 30px;
    padding: 20px;
    min-height: 300px;
    height: auto;
    background-color: grey;
    border-radius: 10px;
`
// Todolist Card
export const TodolistCardContent = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 8px;
    background-color: gold;
    box-shadow: 0 0 20px black;
`

export const TodolistMainContext =styled.div`
    display: inline-block;
    background-color: orange;
    padding: 8px;
    border-radius: 8px;
`

export const TodolistTitle = styled.div`
    padding: 8px;
    height: auto;
    min-width: 100px;
    width: 200px;
    border-radius: 8px;
    background-color: #BBFF66;
`

export const TodolistContent = styled.div`
    margin-top: 10px;
    padding: 8px;
    height: auto;
    width: 200px;
    border-radius: 8px;
    background-color: dimgray;
    color: whitesmoke;
`

export const TodolistOptionsBar = styled.div`
    position: absolute;
    right: 8px;
    bottom: 8px;
    display: inline-block;
    padding: 9px;
    border-radius: 8px;
    background-color: gray;
`

// Todolist 地址部分

export const TodolistAddressBlock = styled.div`
    display: ${props => props.todoPlace ? 'inline-block' : 'none'};
    background-color: orange;
    margin-left: 15px;
    padding: 8px;
    border-radius: 8px;
`

export const TodolistPlace = styled.div`
    display: inline-block;
    padding: 8px;
    border-radius: 8px;
    background-color: #BBFF66;
`

export const TodolistSubPlace = styled.div`
    display: inline-block;
    padding: 8px;
    margin-left: 8px;
    border-radius: 8px;
    background-color: dimgray;
    color: whitesmoke;
`

// Todolist Navegation Bar
export const TodolistBarContent = styled.nav`
padding: 0 20px;
display: flex;
align-items: center;
justify-content: start;
border-radius: 10px;
background-color: gray;
height: 60px;
`

// Todolist Editing Block

export const BeMiddle = styled.div`
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

export const TodolistEditingContent = styled.div`
    padding: 25px;
    background-color: wheat;
    border-radius: 10px;
    width: 600px;
    height: auto;
`