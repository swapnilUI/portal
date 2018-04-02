import React, {Component} from 'react';
import { HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel, Col, Form, Panel, Button, Row} from 'react-bootstrap';


class SignUpForm extends Component{
  constructor(props){
    super(props);

    this.state ={
      name:"",
      email:"",
      username:"",
      password:"",
      erros:{
        nameErr:"",
        emailErr:"",
        usernameErr:"",
        passwordErr:""
      }
    }
  }
  renderForm(){
    return(
      <Form horizontal>
          <FormGroup controlId="name">
              <Col componentClass={ControlLabel} sm={4}>
                Name
              </Col>
              <Col sm={8}>
              <FormControl type="text" placeholder="Name" />
              </Col>
          </FormGroup>
          <Row>
          <Col sm={4}>

          </Col>
          <Col sm={8}>
          <HelpBlock>
          <p className="text-danger">test</p>
        </HelpBlock>
          </Col>
          </Row>

          <FormGroup controlId="email">
              <Col componentClass={ControlLabel} sm={4}>
              Email
              </Col>
              <Col sm={8}>
              <FormControl type="email" placeholder="email" />
              </Col>
          </FormGroup>
          <FormGroup controlId="username">
              <Col componentClass={ControlLabel} sm={4}>
              User name
              </Col>
              <Col sm={8}>
              <FormControl type="text" placeholder="User name" />
              </Col>
          </FormGroup>
          <FormGroup controlId="password">
              <Col componentClass={ControlLabel} sm={4}>
              Password
              </Col>
              <Col sm={8}>
              <FormControl type="password" placeholder="Password" />
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
