import React, { Component } from 'react'
import { Link } from 'react-router'
import dato from '../dato/dato'
import { blog } from '../dato/slug'
import Head from '../components/Head'

class Blog extends Component {
  constructor() {
    super()
    this.state = {
      page: [],
      articles: []
    }
  }

  componentWillMount () {
    dato.getPage(blog)
      .then((page) => this.setState({page}))

    dato.getItems('article')
      .then((articles) => this.setState({articles}))
  }

  render() {
    const { articles, page } = this.state
    const articlesList = articles.map(({id, slug, title}) =>
      <li key={id}>
        <Link to={{pathname:`/${page.slug}/${slug}`, state:{id}}}>{title}</Link>
      </li>
    )

    return (
      <div>
        <Head title={page.title} />
        <h1>{page.title}</h1>
        <ul>
          {articlesList}
        </ul>
      </div>
    )
  }
}

export default Blog
