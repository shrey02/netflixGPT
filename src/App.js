import React from 'react'
import Body from './component/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
function App() {
  return (
    <Provider store={store}>
    <Body/>
    </Provider>
  )
}

export default App