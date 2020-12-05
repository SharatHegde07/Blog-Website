import React from 'react';
import './login.css'

class Reset extends React.Component {
    state = { 
       
     }

    render() { 
        return ( 
            <div className='login'>
                <div>
                    <logo />
                </div>
               
                <div className='loginBox'>
                <form onSubmit = {this.handleSubmit}>
                <br></br>
                  <input className='email' type='text' name='email' placeholder='Enter the OTP...' required onChange = {this.handleChange}/>
                    
                    <br></br>
                    <input className='password' type='password' name='password' placeholder='Enter Password....' required onChange = {this.handleChange} />
                    <br></br>
                    
                     <input className='password' type='password' name='password' placeholder='Confirm Password' required onChange = {this.handleChange} />
                     <br></br>
                    <br></br>
                    <button className='button' >Reset Password</button>
                    <br></br>
                    <br></br>
                </form>
                </div>
            </div>
           
         );
    }
}

export default Reset;
