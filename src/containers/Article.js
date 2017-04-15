import React, { Component } from 'react'
import dato from '../dato'

class Article extends Component {
  state = {
    article: {}
  }

  componentWillMount () {
    dato.getArticle(this.props.params.articleId)
      .then((article) => this.setState({ article }))
  }

  render () {
    const { title, plot } = this.state.article

    return (
      <div>
        <h1>{title}</h1>
        <p>{plot}</p>
      </div>
    )
  }
}

export default Article
