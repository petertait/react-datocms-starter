import React, { Component } from 'react'
import dato from '../dato'
import Helmet from 'react-helmet';

class Article extends Component {
  state = {
    article: {}
  }

  componentWillMount () {
    dato.getPage(this.props.params.id)
      .then((article) => this.setState({ article }))
  }

  render () {
    const { title, plot } = this.state.article

    return (
      <div>
        <Helmet title={title} />
        <h1>{title}</h1>
        <p>{plot}</p>
      </div>
    )
  }
}

export default Article
