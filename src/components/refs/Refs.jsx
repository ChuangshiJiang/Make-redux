import React,{Component} from 'react';

class Refs extends Component{
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.input.focus();
        console.log(this.input);
    }

    render(){
        return(
            <div>
                <input ref={input => this.input = input}/>
            </div>
        )
    }
}

export default Refs;