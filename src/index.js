import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@store/index'
import App from './App'

const app = <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>

ReactDOM.render(app, document.getElementById('root'))

