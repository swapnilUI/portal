import React, {Component} from 'react';
import RegisterForm from './registerForm';
import Style from './register.scss'
import {connect} from 'react-redux';
import {registerSubmit} from '../../actions/register';


class Register extends Component{

  render(){
    const {registerSubmit} = this.props;
    return(
      <div className="signUpPage">
      <h2>Register</h2>
      <RegisterForm registerSubmit={registerSubmit} />
      </div>
    )
  }
}

export default connect((state)=>{return {}}, {registerSubmit})(Register);
