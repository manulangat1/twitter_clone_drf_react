import React from 'react';
import { Provider} from 'react-redux'
import './App.css';

import store from './store'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <section>
        <h1>hey</h1>
      </section>
      </Provider>
    )
  }
}
export default App;
