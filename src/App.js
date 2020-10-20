import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Homepage from './Components/Homepage';
import UserPage from './Components/UserPage';

function App() {
  return (
    <Router>

<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Weather App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
    </Nav>
              <ul className="navbar-nav align-items-left">
                    <li className="nav-item">
                       <Link className="nav-link" to={"/login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to={"/signup"}>Sign up</Link>
                    </li>
                </ul>
  </Navbar.Collapse>
</Navbar>
    
    <Homepage/>
    <Switch>
    <Route path="/login" component= {Login} />
    <Route path="/signup" component= {Signup} />
    <Route path="/userpage" component= {UserPage} />
    </Switch>

    </Router>
  );
}

export default App;
