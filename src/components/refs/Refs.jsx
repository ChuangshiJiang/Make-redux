import React,{Component} from 'react';

class Clock extends Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
        this.state = {
            date: new Date(),

        }
    }

    componentWillMount(){
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    componentDidMount(){
        this.input.focus();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
                <input ref={input => this.input = input}/>
                <h2>
                    <p>现在时间是：</p>
                    {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        )
    }
}

class Refs extends Component{
    constructor(){
        super();
        this.state = {
            isShowLock: true
        }
    }

    handleHideOrShow(){
        this.setState({
            isShowLock: !this.state.isShowLock
        });
    }

    render(){
        return(
            <div>
                {this.state.isShowLock ? <Clock /> : null }
                <button onClick={this.handleHideOrShow.bind(this)}>显示或隐藏时钟</button>
            </div>
        )
    }
}

export default Refs;