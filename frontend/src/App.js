import React from 'react';
import { Provider} from 'react-redux'
import { HashRouter as Router,Switch,Route} from 'react-router-dom'
import './App.scss';

import store from './store'

import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Dashboard from './components/apps/Dashboard'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Router>
      <section>
        <Header />
        <Switch>
          <main className="appC">
          <Route  exact path='/' component={Dashboard} />
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