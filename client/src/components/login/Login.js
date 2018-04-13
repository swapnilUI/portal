import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {submitLogin} from '../../actions/login';

class Login extends Component{
  render(){
    const {submitLogin,history} = this.props;
    return(
      <LoginForm history={this.props.history} submitLogin={submitLogin} error={this.props.error} loginSuccess={this.props.loginSuccess} />
    )
  }
}
const mapStateToProps = state =>{
  const {error,user, loginSuccess} = state.login
  return {
    error: error && error !== ""  ? error.message : "",
    user: user,
    loginSuccess
  };
}
export default connect(mapStateToProps,{submitLogin})(Login);
