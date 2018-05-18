import React,{Component} from 'react'
import wrappedWithLoadData from './wrapWithLoadData'

class InputWithUserName extends Component{
    render(){
        return <input value={this.props.data} readOnly='readonly'/>
    }
}

InputWithUserName = wrappedWithLoadData(InputWithUserName,'username');

export default InputWithUserName