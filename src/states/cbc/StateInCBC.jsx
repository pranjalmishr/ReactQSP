import {Component} from "react"

class StateInCBC extends Component{
    state = {count:0};
    increment =()=>{
        console.log("Update State");
        this.setState({count: this.state.count + 1});
    }
    decrement=()=>{
        console.log("Update State");
        if(this.state.count>0){
        this.setState({count: this.state.count - 1});
    }}
    reset=()=>{
        this.setState({count: this.setState.count = 0});
    }
    render(){
        console.log(this);
        return(
            <div>
                <h1> States In Class Based</h1>
                <h2>
                    counter <mark>{this.state.count}</mark>
                </h2>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>Reset</button>

            </div>
        );
    }
}
export default StateInCBC;