import React, { Component, Fragment } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class StripePayment extends Component {
  render() {
    return (
      <Fragment>
        <StripeCheckout
          amount={500}
          name='Fierce-Hollows'
          description='Add credits for Fierce-Hollows'
          label='Add credits'
          token={token => this.props.handleStripeToken(token)} // submit callback
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        >
          <button className='button secondary'>Add credits</button>
        </StripeCheckout>
      </Fragment>
    );
  }
}

export default connect(
  null,
  actions
)(StripePayment);
