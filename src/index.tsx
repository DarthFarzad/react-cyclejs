import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import configureStore from './configureStore';
import './index.css';
import App from './containers/App';
import HomePage from './containers/HomePage';
import NowPlaying from './containers/NowPlaying';
import NotFoundPage from './containers/NotFoundPage';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App>
              <Switch>
                  <Route exact path="/"><HomePage /></Route>
                  <Route exact path="/now-playing"><NowPlaying /></Route>
                  <Route path="*"><NotFoundPage/></Route>
              </Switch>
          </App>
      </Router>
  </Provider>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
