import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contato from './pages/contato';
import Home from './pages/home';
import Sobre from './pages/sobre';

ReactDOM.render(
  (
    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/sobre' component={Sobre} />
          <Route path='/contato' component={Contato} />
        </Switch>
      </App>
    </Router>

  ),
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

