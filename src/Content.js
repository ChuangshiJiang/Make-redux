import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
import Header from './Header'

class Content extends Component{
    render(){
        return (
            <div>
                <p> React.js 小书内容 </p>
                <ThemeSwitch />
            </div>
        )
    }
}

export default Content