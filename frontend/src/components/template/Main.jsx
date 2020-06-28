import './Main.css'
import Header from './Header'
import React, { Fragment } from 'react'

export default props => 
  <Fragment>
    <Header {...props}/>
    <main className="content container-fluid">
      <div className="p-3 mt-3">
        {props.children}
      </div>
    </main>
  </Fragment>