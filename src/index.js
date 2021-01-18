import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import NewCard from './components/NewCard';
import Resume from './components/Resume';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // pour pouvoir utiliser Redux Devtools 
);


const Root = () => (
  <Router>
      <Switch>
          <Route exact path='/' component={App} />
          <Route path='/newCard' component={NewCard} />
          <Route path='/resume' component={Resume} />
          {/* <Route component={NotFound} /> */}
      </Switch>
  </Router>
);


ReactDOM.render(
  <Provider store={store}>
      <Root />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
