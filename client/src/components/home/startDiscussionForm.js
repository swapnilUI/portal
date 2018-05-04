import React,{Component} from 'react';
import { HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel, Col, Form, Panel, Button, Row, Alert} from 'react-bootstrap';

class DiscussionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      heading:"",
      description:"",
      category:"",
      author:JSON.parse(localStorage.loggedInUser).name
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.submitDiscussion(this.state);
  }
  render() {
    return (
      <div>
          <Form horizontal onSubmit={this.onSubmit}>
              <FormGroup controlId="heading">
                  <Col componentClass={ControlLabel} sm={4}>
                    Heading
                  </Col>
                  <Col sm={8}>
                  <FormControl type="text" onChange={this.onChange} name="heading" value={this.state.heading} placeholder="Heading" />
                  </Col>
              </FormGroup>
              <FormGroup controlId="description">
                  <Col componentClass={ControlLabel} sm={4}>
                    Description
                  </Col>
                  <Col sm={8}>
                  <FormControl type="textarea" onChange={this.onChange} name="description" value={this.state.description} placeholder="Description" />
                  </Col>
              </FormGroup>
              <FormGroup controlId="category">
                  <Col componentClass={ControlLabel} sm={4}>
                    Category
                  </Col>
                  <Col sm={8}>
                  <FormControl componentClass="select" name="category" onChange={this.onChange} placeholder="Category">
                   <option value="select">select</option>
                   <option value="0">Property</option>
                   <option value="1">Buy/Sell</option>
                 </FormControl>
                  </Col>
              </FormGroup>
              <FormGroup controlId="confirmpassword">
                  <Col componentClass={ControlLabel} sm={4}>

                  </Col>
                  <Col sm={8}>
                  <Button type="submit" bsStyle="primary">Submit</Button>
                </Col>
              </FormGroup>
          </Form>
      </div>
    );
  }
}

export default DiscussionForm;
