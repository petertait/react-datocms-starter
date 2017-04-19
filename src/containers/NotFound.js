import React from 'react'
import { Link } from 'react-router'
import Head from '../components/Head'

const NotFound = () => (
  <div>
    <Head title='Page not found' />
    <h1>Not Found!</h1>
    <Link to='/'>Go Home</Link>
  </div>
)

export default NotFound
