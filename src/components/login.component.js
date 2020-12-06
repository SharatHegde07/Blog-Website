import React from 'react';
import './css/login.css'
import {Link} from 'react-router-dom'
//import CreateAcc from './CreateAcc';
import axios from 'axios';

class Login extends React.Component {
    state = { 
        email:'',
        pwd:'',
        error:''
     }

    handleChange = (e) => {
        const{name,value} = e.target;
        this.setState({[name]:value})

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        
        

        //console.log(Info);
      axios.post('http://localhost:5002/users/login',{
        email: this.state.email,
        password: this.state.pwd
      })
      .then((res) => {
        if(res.data.status === "yes"){
          window.location = "/create-article"
        }
        else{
          this.setState({
            error:"Wrong details"
          })
        }
      })
      .catch(err => console.log(err));
        
}

   
    render() { 
        return ( 
            <div className="wrapper">
            <div className="form-wrapper container">
              <h1>Log In</h1>
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    className="EMAIL"
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                  />
                </div>
                
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="pwd"
                    noValidate
                    onChange={this.handleChange}
                  />
                  
                </div>
                <br/><br/>
                <div className="createAccount">
                  <button type="submit">Log In</button>
                  
                  <small>Dont have account?<Link to="/create-account">  Create One</Link></small>
                </div>
              </form>
            </div>
            
            <div>alert({this.state.error})</div>
          </div>
           
         );
    }
}

export default Login;
