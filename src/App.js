
import './App.css';
import React from 'react';
import {BrowserRouter as Router}  from 'react-router-dom'
import { Route }  from 'react-router-dom'
import { Switch }  from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Donate from './components/donate/Donate';
import About from './components/about/About';
function App() {
  return (
    <>
    
    <Header/>
    <Router>
    <Switch>
    <Route  exact path='/' component={Home} >
    <Home />
    </Route>
    <Route  exact path='/dogs' component={Donate} >
    <Donate />
    </Route>
    <Route  exact path='/about' component={About} >
    <About />
    </Route>
    </Switch>
    </Router>
    <Contact />
    
    </>
  );
}

export default App;
