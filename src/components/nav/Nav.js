import React, { useState } from 'react';
import { Segment, Menu, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components'

const Tab = ({to, name, active, onClick, icon}) => (
  <Menu.Item
    as={Link}
    to={to}
    name={name}
    active={active === name}
    onClick={onClick}
  >
    <Icon name={icon} />
    {name}
  </Menu.Item>
)

const Nav = props => {
  
  const [activeItem, setActiveItem] = useState('home')
  const handleItemClick = (e, {name}) => {
    setActiveItem(name)
  }
  
  // 這邊的 inline style 找時間修正
  return (
      <div style={{height: '68px'}}>
        <Segment inverted>
          <Menu inverted secondary>
            <Tab to="/" name="Dashboard" icon="dashboard" active={activeItem} onClick={handleItemClick}/>
            <Tab to="/weather" name="Weather" icon="cloud" active={activeItem} onClick={handleItemClick}/>
            <Tab to="/todolist" name="Todolist" icon="list" active={activeItem} onClick={handleItemClick} />
          </Menu>
        </Segment>
      </div>
  )
}

export default Nav