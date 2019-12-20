import React from 'react';
import './App.css';
import Nav from './components/nav'
import Wrapper from './components/wrapper'
import Footer from './components/footer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => (
  <Router>
      <Nav />
      <Wrapper />
      <Footer />
  </Router>
)

export default App;
