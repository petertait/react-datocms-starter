import React, { Component } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet';
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

    const home = '49074'
    dato.getPage(home)
      .then((page) => {
        console.log(page.title)
      })
  }

  render() {
    const { articles } = this.state
    console.log(articles)
    const articlesList = articles.map(({id, slug, title}) =>
      <li key={id}>
        <Link to={`/articles/${id}/${slug}`}>{title}</Link>
      </li>
    )

    return (
      <div>
        <Helmet title={this.state.articles.title} />
        <ul>
          {articlesList}
        </ul>
      </div>
    );
  }
}

export default Articles;
