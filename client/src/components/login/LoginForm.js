import React, {Component} from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel, Col, Form, Panel, Button, Row, Alert} from 'react-bootstrap';
import Login from './Login.scss';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state={
      userData:{
        username:"",
        password:"",
      },
      error:{
        message:""
      }
    }
    this.onchange = this.onchange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  onchange(e){
    this.setState({
      userData:{
        ...this.state.userData,
        [e.target.name]:e.target.value
      }
    })
  }
  submitLogin(e){
      e.preventDefault();
      if(this.state.userData.username==="" || this.state.userData.password ===""){
        this.setState({
          error:{
            message:"Please enter username and password."
          }
        })
        return
      }else {
        this.setState({
          error:{
            message:""
          }
        })
      }
      this.props.submitLogin(this.state.userData).then(()=>{
        this.props.history.push("/home");
      });

      this.setState({
        userData:{
          username:"",
          password:""
        }
      })
  }
  render(){
    return(
      <div className="loginForm">
      <Panel>
      <Panel.Body>
      {
        this.state.error.message === "" ? "":
        <Alert bsStyle="danger">
            <strong>{this.state.error.message}</strong>
        </Alert>
      }
      {
        this.props.error === "" ? "":
        <Alert bsStyle="danger">
            <strong>{this.props.error}</strong>
        </Alert>
      }
      <Form horizontal>
      <div className="formrow">
        <Col componentClass={ControlLabel}>
          User name
        </Col>
        <Col>
          <FormControl type="text" name="username" onChange={this.onchange} value={this.state.userData.username} placeholder="User name" />
        </Col>
      </div>
        <div className="formrow">
          <Col componentClass={ControlLabel}>
            Password
          </Col>
          <Col>
            <FormControl type="password" onChange={this.onchange} name="password" value={this.state.userData.password} placeholder="Password" />
          </Col>
        </div>
        <button type="submit" onClick={this.submitLogin} className="btn btn-primary">Login</button>
      </Form>
      </Panel.Body>
      </Panel>
      </div>
    )
  }
}

export default LoginForm;
