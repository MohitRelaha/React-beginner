import  React,{Component} from 'react';
import ReactDOM from 'react-dom' ;
import Number from './number'
 
class IncDec extends Component{
    constructor(){
        super();
        this.state = {
            num : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState({
            num : this.state.num + 1
        }
        )
    }

    decrement(){
        this.setState({
            num : this.state.num - 1
        }
        )
    }


    render(){
        return (
            <div>
                <Number num={this.state.num}  />
                <button onClick = {this.increment} style ={{backgroundColor: "forestgreen"}}>INCREMENT</button>
                <button onClick = {this.decrement} style ={{backgroundColor: "red"}}>DECREMENT</button>
           </div>
        );
    }
}


export default IncDec 
