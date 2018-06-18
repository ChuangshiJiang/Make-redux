import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'

function createStore(reducer) {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispathch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    }

    dispathch({});//初始化 state
    return { getState, dispathch, subscribe };
}

const themeReduecer = (state, action) => {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }

    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            return state;
    }
}


const store = createStore(themeReduecer);

class Index extends Component {
    static childContextTypes = {
        store:PropTypes.object
    }

    getChildContext(){
        return{
            store
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)
