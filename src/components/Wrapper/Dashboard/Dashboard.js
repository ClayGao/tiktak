import React, { useState, useEffect } from 'react';
import { Card, Segment, Menu, Icon, Input } from 'semantic-ui-react'
import axios from 'axios'

const Dashboard = () => {
    const [testText, setTestText] = useState('')
    const handleInputChange = (e) => setTestText(e.target.value)

    console.log(testText)

    return (
        <div>This is a Dashboard
            <input value={testText} onChange={handleInputChange} text="type" />
        </div>
    )
}

export default Dashboard