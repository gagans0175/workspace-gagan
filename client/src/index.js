import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import routeProvider from './routeProvider';
import configureStore from './store';
import createRoutes from './routes';
import reducers from './reducers';

import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';

const initialState = {};
const store = configureStore(initialState, reducers, reduxThunk);
ReactDOM.render(routeProvider(store, createRoutes()), document.getElementById('root'));
