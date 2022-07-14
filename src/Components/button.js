import react, { Component } from "react";

class Button extends Component {
  render() {
    return <button onClick={()=>this.props.changeColor()}> Click me!</button>;
  }
}
export default Button;