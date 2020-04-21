import axios from 'axios';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const handleStripeToken = token => async dispatch => {
  const response = await axios.post('/api/handleStripeToken', token);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
