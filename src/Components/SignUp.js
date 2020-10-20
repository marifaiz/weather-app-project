import React, { Component } from 'react';
import axios from 'axios';


 class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation:"",
            signupErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const { email, password, password_confirmation } = this.state;

        axios.post("https://localhost:3000/signup", {
        user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
    },
     { withCredentials: true }
    )
    .then(response => {
        console.log("signup res", response);
    })
    .catch(error => {
        console.log("signup error", error);
    });
    event.preventDefault();
} 

    render() {
        // console.log(this, "render")
        return (
            <div>
               <form className="logs" onSubmit={this.handleSubmit}>
                  <input type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required />
                  <br/>   <br/>
                  <input type="password"   
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required />
                    <br/>  <br/>
                  <input type="password"   
                  name="password_confirmation"
                  placeholder="Password confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                  required />
                     <br/>  <br/>
                  <button type="submit">Signup</button>
               </form>
            </div>
        )   
    }
     }
     

export default Signup;