import React, { Component } from 'react'
import dato from '../dato/dato'
import Head from '../components/Head'
import { blog } from '../dato/slug'

class Subpage extends Component {
  constructor() {
    super()
    this.state = {
      page: []
    }
  }

  componentWillMount () {
    if (this.props.location.state !== undefined) {
      dato.getPage(this.props.location.state.id)
        .then((page) => this.setState({ page }))
    } else {
      const fullPath = this.props.location.pathname
      dato.getPages()
        .then((pages) => {
        dato.getPage(this.props.page)
          .then((page) => {
            const pageTitle = '/' + this.props.page.slug + '/'
            const pagePath = fullPath.replace(pageTitle, '')
            pages.map(({id, slug}) => {
              if (slug === pagePath) {
                return (
                  dato.getPage(id)
                    .then((page) => this.setState({ page }))
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
    const { title } = this.state.page
    return (
      <div>
        <Head title={title} />
        <h1>{title}</h1>
      </div>
    )
  }
}

export default Subpage
