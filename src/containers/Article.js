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

  componentWillMount () {
    const location = this.props.location
    if (location.state !== undefined) {
      dato.getPage(location.state.id)
        .then((article) => this.setState({ article }))
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
              return (
                dato.getPage(articleSlug.id)
                  .then((article) => this.setState({ article }))
              )
            } else {
              return browserHistory.push('/error')
            }
          })
        }
      )
    }
  }

  render () {
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
