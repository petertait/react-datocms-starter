import React from 'react'
import { Provider, observer } from 'mobx-react'
import { initStore } from '../store'
import Head from 'next/head'

@observer
export default class Home extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)
    return { pages: store.pages, isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore()
  }

  render() {
    return (
      <Provider Store={this.store}>
        <Head>Test</Head>
        <h1>Test</h1>
      </Provider>
    )
  }
}
