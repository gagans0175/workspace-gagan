import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Payment from './Payment';

export default class Header extends Component {
  renderLoginButton() {
    switch (this.props.auth) {
      case null:
        return <p>Fetching Info.. </p>;
      case false:
        return (
          <li>
            <a href='/auth/googleService'>Login with Google</a>
          </li>
        );
      default:
        return [
          <li key='1'>
            <Payment />
          </li>,
          <li key='3' style={{ margin: '0 10px' }}>
            Credits: {this.props.auth && this.props.auth.credits}
          </li>,
          <li key='2'>
            <a href='/api/logout'>Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <Row className='header'>
        <Col xs={12} className='noSidePad'>
          <nav className='navBar'>
            <div className='nav-wrapper'>
              <Row className='height100'>
                <Col xs={1} className='noSidePad'></Col>
                <Col xs={10} className='noSidePad'>
                  <Link to={this.props.auth ? '/surveys' : '/'} className='left brand-logo height100'>
                    Fierce-Hollows
                  </Link>
                  <ul className='right height100'>{this.renderLoginButton()}</ul>
                </Col>
                <Col xs={1} className='noSidePad'></Col>
              </Row>
            </div>
          </nav>
        </Col>
      </Row>
    );
  }
}
