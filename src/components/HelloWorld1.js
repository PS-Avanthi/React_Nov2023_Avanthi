import React,{Component} from "react";
class HelloWorld1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"John",
        };
    }
    render(){
        return(
            <div>
                <h1>Hello world!{this.state.name}</h1>
            </div>
        );
    }
}
export default HelloWorld1;