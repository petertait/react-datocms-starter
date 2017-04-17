import React, { Component } from 'react'
import { Link } from 'react-router'
import dato from '../dato/dato'
import { home, blog, about } from '../dato/slug'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      home: [],
      about: [],
      blog: [],
      pages: []
    }
  }

  componentWillMount () {
    dato.getPage(home)
      .then((home) => this.setState({home}))
    dato.getPage(about)
      .then((about) => this.setState({about}))
    dato.getPage(blog)
      .then((blog) => this.setState({blog}))
    dato.getPages()
      .then((pages) => this.setState({pages}))
  }

  render () {
    console.log(this.state.pages)
    const { home, about, blog, pages } = this.state

    // const menuItem = true
    // const has = (obj, value) => {
    //   const keys = Object.keys(obj);
    //   return !keys.length || keys.findIndex((key) => obj[key] === value) !== -1
    // }

    const navList = pages.map(({id, slug, title, menuSite}) =>

      {menuSite === true &&

        <li key={id}>
          <Link to={{pathname:`/${slug}`, state:{id}}}>{title}</Link>
        </li>
      }
    )


    return (
      <nav>
        <ul>
          <li><Link to='/'>{home.title}</Link></li>
          <li><Link to={blog.slug}>{blog.title}</Link></li>
          <li><Link to={about.slug}>{about.title}</Link></li>
        </ul>
        {navList}
      </nav>
    )
  }
}

export default Nav
