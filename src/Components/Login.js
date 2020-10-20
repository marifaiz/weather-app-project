import React, { Component } from 'react';
//import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import UserPage from './UserPage';

 class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password } = this.state;

        axios.post("https://localhost:3000/login",
            {
                user: {
                    email: email,
                    password: password
                }
            },
            { withCredentials: true}
        )
        .then(response => {
            console.log("res from login", response);
            if (response.data.status === "created") {
             this.props.handleSuccessfulAuth(response.data)
             }
        })
        .catch(error => {
            console.log("login error", error);
        });
        event.preventDefault();
    }

     render() {
        return (
            <div>
               <form className="logs" onSubmit={this.handleSubmit}>
                  <input type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required />
                   <br/><br/>
                  <input type="password"   
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required />
                   <br/> <br/>
                  <button onClick={UserPage} type="submit">Login</button>
               </form>


            </div>
        )   
    }
     }

export default Login;