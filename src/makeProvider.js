import React,{Component} from 'react'
import PropTypes from 'prop-types'

const makeProvider = (haha)=> (WrappedComponent)=>{
    class NewComponent extends Component{
        static childContextTypes  = {
            data:PropTypes.any
        }

        constructor(){
            super()
        }

        getChildContext(){
            return {
                data:haha
            }
        }

        render(){
            return (
                <WrappedComponent />
            )
        }

    }

    return NewComponent;
}

export default makeProvider;