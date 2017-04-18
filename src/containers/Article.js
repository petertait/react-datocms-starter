import React, { Component } from 'react'
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
    if (this.props.location.state !== undefined) {
      dato.getPage(this.props.location.state.id)
        .then((article) => this.setState({ article }))
    } else {
      const fullPath = this.props.location.pathname
      dato.getPages()
        .then((pages) => {
        dato.getPage(blog)
          .then((blog) => {
            const blogTitle = '/' + blog.slug + '/'
            const articlePath = fullPath.replace(blogTitle, '')
            pages.map(({id, slug}) => {
              if (slug === articlePath) {
                return (
                  dato.getPage(id)
                    .then((article) => this.setState({ article }))
                )
              } else {
                return false
              }
            })
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
