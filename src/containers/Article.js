import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import dato from '../dato/dato'
import Head from '../components/Head'
import { blog } from '../dato/slug'

class Article extends Component {
  constructor() {
    super()
    this.state = {
      article: [],
      pages: []
    }
  }

  getArticle(id) {
    dato.getPage(id)
      .then((article) => this.setState({ article }))
  }

  componentWillMount() {
    const location = this.props.location
    if (location.state !== undefined) {
      this.getArticle(location.state.id)
    } else {
      dato.getPages()
        .then((pages) => {
        dato.getPage(blog)
          .then((blog) => {
            const blogTitle = '/' + blog.slug + '/'
            const articlePath = location.pathname.replace(blogTitle, '')
            const articleSlug = pages.filter((obj) => {
              return obj['slug'] === articlePath
            })[0]
            if (articleSlug !== undefined) {
              this.getArticle(articleSlug.id)
            } else {
              browserHistory.push('/error')
            }
          })
        }
      )
    }
  }

  render() {
    const { title } = this.state.article
    return (
      <div>
        <Head title={title} />
        <h1>{title}</h1>
      </div>
    )
  }
}

export default Article
