import React, { Component } from 'react'
import dato from '../dato/dato'
import { home } from '../dato/slug'
import Head from '../components/Head'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      page: []
    }
  }

  componentWillMount () {
    dato.getPage(home)
      .then((page) => this.setState({page}))
  }

  render () {
    const { page } = this.state
    return (
      <div>
        <Head title={page.title} />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
