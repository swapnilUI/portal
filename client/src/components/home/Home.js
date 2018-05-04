import React,{Component} from 'react';
import Landing from '../landing/Landing';
import {Modal,Button} from 'react-bootstrap';
import DiscussionForm from './startDiscussionForm';
import {connect} from 'react-redux';
import {submitDiscussion} from '../../actions/discussions';

class Home extends Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render(){
    const {submitDiscussion} = this.props;
    return(
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleShow}>Start New Discussion</button>
        <Landing isloggedIn ="true" />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Start New Discussion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DiscussionForm submitDiscussion = {submitDiscussion} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return state;
}
const mapDispatchToProps = (dispatch)=>{
  return {
    submitDiscussion:(postData) => dispatch(submitDiscussion(postData))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
