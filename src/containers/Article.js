import React, { Component } from 'react'
import dato from '../dato/dato'
import Head from '../components/Head'

class Article extends Component {
  constructor() {
    super()
    this.state = {
      article: []
    }
  }

  componentWillMount () {
    const articleId = this.props.location.state.id
    dato.getPage(articleId)
      .then((article) => this.setState({ article }))
  }

  render () {
    const { title, plot } = this.state.article

    return (
      <div>
        <Head title={title} />
        <h1>{title}</h1>
        <p>{plot}</p>
      </div>
    )
  }
}

export default Article
