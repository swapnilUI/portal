import React, {Component} from 'react';
import RegisterForm from './registerForm';
import Style from './register.scss'

class Register extends Component{
  render(){
    return(
      <div className="signUpPage">
      <h2>Register</h2>
      <RegisterForm />
      </div>
    )
  }
}

export default Register;
