import React, {Component} from 'react';
import { HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel, Col, Form, Panel, Button, Row, Alert} from 'react-bootstrap';


class SignUpForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      userData:{
        name:"",
        email:"",
        username:"",
        password:"",
      },
      errors:{
        nameErr:"",
        emailErr:"",
        usernameErr:"",
        passwordErr:""
      }
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      userData:{
        ...this.state.userData,
        [e.target.name]:e.target.value
      }
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.registerSubmit(this.state.userData);
    this.setState({
      userData:{
        name:"",
        email:"",
        username:"",
        password:"",
      },
      errors:{
        nameErr:"",
        emailErr:"",
        usernameErr:"",
        passwordErr:""
      }
    });
  }

  renderForm(){
    return(
      <Form horizontal onSubmit = {this.onSubmit}>
          {
            this.props.signupMessage === "" ?"":
            <Alert bsStyle="success">
                <strong>{this.props.signupMessage}</strong>
            </Alert>
          }
          <FormGroup controlId="name">
              <Col componentClass={ControlLabel} sm={4}>
                Name
              </Col>
              <Col sm={8}>
              <FormControl type="text" onChange={this.onChange} name="name" value={this.state.userData.name} placeholder="Name" />
              </Col>
          </FormGroup>


          <FormGroup controlId="email">
              <Col componentClass={ControlLabel} sm={4}>
              Email
              </Col>
              <Col sm={8}>
              <FormControl type="email" name="email" onChange={this.onChange} value={this.state.userData.email} placeholder="email" />
              </Col>
          </FormGroup>
          <FormGroup controlId="username">
              <Col componentClass={ControlLabel} sm={4}>
              User name
              </Col>
              <Col sm={8}>
              <FormControl type="text" name="username" onChange={this.onChange} value={this.state.userData.username} placeholder="User name" />
              </Col>
          </FormGroup>
          <FormGroup controlId="password">
              <Col componentClass={ControlLabel} sm={4}>
              Password
              </Col>
              <Col sm={8}>
              <FormControl type="password" name="password" onChange={this.onChange} value={this.state.userData.password} placeholder="Password" />
              </Col>
          </FormGroup>
          <FormGroup controlId="confirmpassword">
              <Col componentClass={ControlLabel} sm={4}>
              Confirm Password
              </Col>
              <Col sm={8}>
              <FormControl type="password" placeholder="Confirm Password" />
              </Col>
          </FormGroup>
          <FormGroup controlId="confirmpassword">
              <Col componentClass={ControlLabel} sm={4}>

              </Col>
              <Col sm={8}>
              <Button type="submit" bsStyle="primary">Register</Button>
            </Col>
          </FormGroup>

      </Form>
    )
  }

  render(){
    return(
      <div className="signUpForm">
      <Panel>
        <Panel.Body>
        {this.renderForm()}
        </Panel.Body>
      </Panel>
      </div>
    )
  }
}

export default SignUpForm;
