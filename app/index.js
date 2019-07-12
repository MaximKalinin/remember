import * as React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';

import './index.css';
import MoscowSans from './fonts/Moscow_Sans.ttf';
import Login from './components/Login';
import Home from './components/Home';
import Exercise from './components/Exercise';
import Add from './components/Add';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'MySans';
        src: url(${MoscowSans}) format('opentype');
    }
    * {
      font-family: 'MySans';
  }
`;

class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  setAuth = (isAuth: boolean) => this.setState({ isAuth });

  render() {
    const { isAuth } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path="/hello" render={props => <Login {...props} setAuth={this.setAuth} />} />
            <Route path="/exercise" component={Exercise} />
            <Route path="/add" component={Add} />
            <Route path="/" render={props => <Home {...props} isAuth={isAuth} />} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }

};

const container = document.getElementById('app');
if (container) {
  ReactDOM.render(<App />, container);
}
