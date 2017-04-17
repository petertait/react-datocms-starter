import React, { Component } from 'react'
import { Link } from 'react-router'
import dato from '../dato/dato'
import { home, about, blog, abouttt } from '../dato/slug'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      home: [],
      about: [],
      blog: []
    }
  }

  componentWillMount () {
    const aboutid = abouttt.id
    dato.getPage(home)
      .then((home) => this.setState({home}))
    dato.getPage(about)
      .then((aboutid) => this.setState({about}))
    dato.getPage(blog)
      .then((blog) => this.setState({blog}))
  }

  render () {
    console.log(this.state.pages)
    console.log(abouttt.id)
    const { home, about, blog } = this.state
    return (
      <nav>
        <ul>
          <li><Link to='/'>{home.title}</Link></li>
          <li><Link to={blog.slug}>{blog.title}</Link></li>
          <li><Link to={about.slug}>{about.title}</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
