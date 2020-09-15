import React from 'react';
import { Provider} from 'react-redux'
import { HashRouter as Router,Switch,Route} from 'react-router-dom'
import './App.scss';

import store from './store'

import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Dashboard from './components/apps/Dashboard'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/common/PrivateRoute'
import {loadUser} from './actions/auth'
class App extends React.Component{
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render(){
    return(
      <Provider store={store}>
        <Router>
      <section>
        <Header />
        <Switch>
          <main className="appC">
          <PrivateRoute  exact path='/' component={Dashboard} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/register/" component={Register} />
          </main>
        </Switch>
        <Footer />
      </section>
      </Router>
      </Provider>
    )
  }
}
export default App;
