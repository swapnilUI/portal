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
      <RegisterForm registerSubmit={registerSubmit} signupMessage={this.props.signupMessage} resetForm={this.props.signupSuccess}/>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return{
    signupMessage:state.register.length === 0 ? "":state.register.data.message,
    signupSuccess:state.register.length === 0 ? "":state.register.data.success
  }
}

export default connect(mapStateToProps, {registerSubmit})(Register);
