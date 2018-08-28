import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Header from './containers/Header';
import Content from './Content';
import { createStore } from 'redux'
import './index.css';
import {Provider} from './react-redux';
import Refs from './components/refs/Refs'
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
    // <Provider store={store}>
    //     <Index />
    // </Provider>
    <Refs/>,
    document.getElementById('root')
)
