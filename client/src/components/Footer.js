import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
export default class Header extends Component {
  render() {
    return (
      <Row className='footer'>
        <Col xs={12} className='noSidePad'>
          <Row className='height100'>
            <Col xs={12} className='noSidePad'>
              <footer className='page-footer textAlignCenter'>
                <Row className='height100'>
                  <Col xs={1} className='noSidePad'></Col>
                  <Col xs={10} className='noSidePad'>
                    <div className='pad10'>Fierce-Hollows</div>
                  </Col>
                  <Col xs={1} className='noSidePad'></Col>
                </Row>
              </footer>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
