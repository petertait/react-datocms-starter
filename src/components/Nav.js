import React, { Component } from 'react'
import { Link } from 'react-router'
import dato from '../config/dato'
import { home } from '../config/pages'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      pages: []
    }
  }

  componentWillMount() {
    dato.getPages()
      .then((pages) => this.setState({pages}))
  }

  render() {
    const { pages } = this.state
    const navList = pages.map(({id, slug, title, globalMenu}) => {
      if (globalMenu) {
        if(id === home) {
          return (
            <li key={id}>
              <Link to='/'>{title}</Link>
            </li>
          )
        } else {
          return (
            <li key={id}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          )
        }
      } else {
        return false
      }
    })

    return (
      <nav>
        <ul>
          {navList}
        </ul>
      </nav>
    )
  }
}

export default Nav
