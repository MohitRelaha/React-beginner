import React,{Component} from 'react';
import ReactDOM from 'react-dom'

class Number extends Component{
    render(){
        return(
        // <p>Number : {this.props.num} </p>
        <input type="text" placeholder = {this.props.num}/>
        );
    }
}

export default Number;
