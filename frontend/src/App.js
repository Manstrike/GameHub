import React, { Component } from 'react'

import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'

//import ErrorToast from 'Components/blocks/ErrorToast'

import { createStore } from 'redux'

import rootReducer from './store/reducers/index'

console.log(rootReducer)

const store = createStore(rootReducer);




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>govno</h1>
        </div>

      </Provider>
    );
  }
}

export default App;
