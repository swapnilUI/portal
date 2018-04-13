import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userLogout} from '../../actions/login';

class Header extends Component {
  constructor(props){
    super(props);
    this.renderComp = this.renderComp.bind(this);
    this.state={
      username:""
    }
  }

  renderComp(){
    if(localStorage.loggedInUser && this.state.username === ""){
      let userData = JSON.parse(localStorage.loggedInUser);
      this.setState({
        username:userData.name.split(" ")[0]
      })
    }
    return localStorage.loggedInUser ?
    <div><span className='welcomeText'>Welcome ! {this.state.username}</span> <Link to="/" onClick={this.props.userLogout}>Logout</Link></div>:<div><Link to="/login">Login</Link> | <Link to="/register">Register</Link></div>
  }
  render(){
    return(
      <header id="header">
      <Grid>
        <Row className="show-grid clearfix">
          <Col xs={12} md={7} ls={10}>
            <h1 className="logo"><Link to="/">Portal</Link></h1>
          </Col>
          <Col xs={6} md={5} ls={2}>
          <aside className="top-links pull-right">
          {this.renderComp()}
          </aside>
          </Col>
        </Row>
        </Grid>
      </header>
    )
  }
}
const mapStateToProps = (state)=>{
  console.log("userlog", state.login.userLogout);
  return {
    isLoggedOut: state.login.userLogout,
    user:state.login.user.name
  };
}
export default connect(mapStateToProps,{userLogout})(Header);
