import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import * as actions from './actions';

class MainLanding extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Header {...this.props} />
        <Row className='mainContainer'>
          <Col xs={1} className='noSidePad'></Col>
          <Col xs={10} className='noSidePad'>
            <div className='routesComponent'>
              {this.props.routesMap.map((route, i) => (
                <Route key={i} exact={route.exact} path={route.path} component={route.component} />
              ))}
            </div>
          </Col>
          <Col xs={1} className='noSidePad'></Col>
        </Row>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(MainLanding);
