import React, { Component } from 'react'
import dato from '../config/dato'
import { about } from '../config/pages'
import Head from '../components/Head'

class About extends Component {
  constructor() {
    super()
    this.state = {
      page: []
    }
  }

  componentWillMount() {
    dato.getPage(about)
      .then((page) => this.setState({page}))
  }

  render() {
    const { page } = this.state
    return (
      <div>
        <Head title={page.title} />
        <h1>{page.title}</h1>
      </div>
    )
  }
}

export default About
