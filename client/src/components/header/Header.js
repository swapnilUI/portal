import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HeaderCss from './Header.scss';
import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <header id="header">
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={10} ls={10}>
            <h1 className="logo">Portal</h1>
          </Col>
          <Col xs={6} md={2} ls={2}>
          <aside className="top-links">
            <Link to="/login">Login</Link> | <a href="#">Register</a>
          </aside>
          </Col>
        </Row>
        </Grid>
      </header>
    )
  }
}

export default Header;
