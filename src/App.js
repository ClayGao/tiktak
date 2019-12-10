import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Wrapper from './Components/Wrapper'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => (
  <Router>
      <Nav />
      <Wrapper />
      <Footer />
  </Router>
)

export default App;
