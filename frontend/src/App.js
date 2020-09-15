import React from 'react';
import { Provider} from 'react-redux'
import { HashRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';

import store from './store'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Router>
      <section>
        <Switch>
        <h1>hey</h1>
        </Switch>
        
      </section>
      </Router>
      </Provider>
    )
  }
}
export default App;
