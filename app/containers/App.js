import * as React from 'react';
import { Switch, Route } from 'react-router-dom';


import HomePage from './HomePage';
import Login from '../components/Login';

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
      <Switch>
        <Route path="/hello" component={props => <Login {...props} setAuth={this.setAuth} />} />
        <Route path="/" render={props => <HomePage {...props} isAuth={isAuth} />} />
      </Switch>
    );
  }
  // const[isAuth, setIsAuth] = React.useState(false);
}

export default App;
