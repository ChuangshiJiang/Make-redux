import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import PropTypes from 'prop-types'
import Header from './container/Header'
import Content from './container/Content'
import './index.css'
import {Provider} from 'react-redux'

const themeReducer = (state,action)=>{
    if(!state) return {
        themeColor:'red'
    }
    switch(action.type){
        case 'CHANGE_COLOR':
        return {
            ...state,
            themeColor:action.themeColor
        }
        break;
        default:
        return state;

    }
}

const store = createStore(themeReducer);

class Index extends Component{
    
    render(){
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
)