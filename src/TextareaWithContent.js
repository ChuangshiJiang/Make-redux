import React,{Component} from 'react'
import wrappedWithLoadData from './wrapWithLoadData'

class TextareaWithContent extends Component{
    render(){
        return <textarea value={this.props.data} readOnly='readonly'/>
    }
}

TextareaWithContent = wrappedWithLoadData(TextareaWithContent,'content');

export default TextareaWithContent