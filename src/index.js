import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GoogleOAuthProvider clientId='510587066421-85ol6ic1t56q3acj4j0nasglm5cis68d.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);