import react, { useState, Component } from "react";
import Button from "./button";

// class Header extends Component {
//   state = {
//     color: "red",
//   };

//   invertColor = () => {
//     console.log("I am changing");
//     this.setState({ color: "black" });
//   };

//   render() {
//     return (
//       <>
//         <h1 style={{ color: this.state.color }}> News Feed</h1>
//         <Button changeColor={this.invertColor} />
//       </>
//     );
//   }
// }

const Header = () => {
  const [clr, setColor] = useState("red");

  let invertColor = () => {
    console.log("I am changing");
    if (clr === "black") {
      setColor("red");
    } else {
      setColor("black");
    }
  };
  return (
    <>
      <h1 style={{ color: clr }}> News Feed</h1>
      <Button changeColor={invertColor} />
    </>
  );
};

export default Header;
