import React from 'react'
import Header from '../components/Header'
import { injectGlobal } from '../config/styles'

const App = ({ children }) => (
  <injectGlobal>
    <Header />
    {children}
  </injectGlobal>
)

export default App
