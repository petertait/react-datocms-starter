import React, { Component } from 'react'
import { Link } from 'react-router'
import dato from '../dato'

class Articles extends Component {
  state = {
    articles: []
  }

  componentWillMount () {
    dato.getArticles()
      .then((articles) => this.setState({
        articles
      }))
  }

  render() {
    const {articles} = this.state
    console.log(articles)
    const articlesList = articles.map(({id, title}) =>
      <li key={id}>
        <Link to={`/articles/${id}`}>{title}</Link>
      </li>
    )

    return (
      <ul>
        {articlesList}
      </ul>
    );
  }
}

export default Articles;
