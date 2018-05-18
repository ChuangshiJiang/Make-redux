import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MakeProvider from './makeProvider'
class Index extends Component {
    static contextTypes = {
        data:PropTypes.any
    }
    render () {
      return (
        <div>{this.context.data}</div>
      )
    }
  }
  
  Index = MakeProvider([<div key={1}>lala</div>,<p key={2}>haha</p>])(Index)
  

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)