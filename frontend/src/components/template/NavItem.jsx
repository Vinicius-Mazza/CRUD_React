import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
  <Link to={`${props.link}`}>
    <i className={`${props.icon}`}></i> {props.title}
  </Link>