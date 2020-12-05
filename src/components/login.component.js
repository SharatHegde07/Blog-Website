import React from 'react';
import './login.css'
import {Link} from 'react-router-dom'
//import CreateAcc from './CreateAcc';

class Login extends React.Component {
    state = { 
        email:'',
        pwd:''
     }

    handleChange = (e) => {
        const{name,value} = e.target;
        this.setState({[name]:value})

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.isLogin(true);
    }

   
    render() { 
        return ( 
            <div className='login'>
                <div>
                    <logo />
                </div>
               
                <div className='loginBox'>
                <form onSubmit = {this.handleSubmit}>

                  <input className='email' type='text' name='email' placeholder='Enter Your Email...' required onChange = {this.handleChange}/>
                    <br></br>
                    <br></br>
                  <input className='password' type='password' name='password' placeholder='Enter Your Password....' required onChange = {this.handleChange} />
                    <br></br>
                    <br></br>

                    <button className='button' onSubmit = {this.handleSubmit}>LOG IN</button>
                    <br></br>
                    <br></br>
                    <Link className='a' to="/Reset">FORGOT password </Link><br></br>
                    <Link className='a' to="/create">Create an account</Link><br></br>
                    <Link className='a' to="/About">About</Link>
                </form>
                </div>
            </div>
           
         );
    }
}

export default Login;
