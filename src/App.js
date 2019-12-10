import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Wrapper from './components/Ｗrapper'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => (
  <Router>
      <Nav />
      <Wrapper />
      <Footer />
  </Router>
)

export default App;
