import React, { Component } from 'react'
import { Link } from 'react-router'
import dato from '../dato/dato'
import { home } from '../dato/slug'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      pages: []
    }
  }

  componentWillMount () {
    dato.getPages()
      .then((pages) => this.setState({pages}))
  }

  render () {
    // console.log(this.state.pages)
    const { pages } = this.state

    const navList = pages.map(({id, slug, title, menuSite}) => {
      if (menuSite) {
        if(id === home) {
          return (
            <li key={id}>
              <Link to={{pathname:`/`, state:{id}}}>{title}</Link>
            </li>
          )
        } else {
          return (
            <li key={id}>
              <Link to={{pathname:`/${slug}`, state:{id}}}>{title}</Link>
            </li>
          )
        }
      }}
    )

    return (
      <nav>
        {navList}
      </nav>
    )
  }
}

export default Nav
