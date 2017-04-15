import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dato from '../dato'

const NotFound = ({ children }) => (
  <div>
    <h1>Not Found!</h1>
    <Link to='/'>Go Home</Link>
  </div>
)

export default NotFound
