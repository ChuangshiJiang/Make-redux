import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import InputWithUserName from './InputWithUserName'
import TextWithContent from './TextareaWithContent'

class Index extends Component{
    render(){
        return (
            <div>
                用户名：<InputWithUserName/>
                <br/>
                内容：<TextWithContent />
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)