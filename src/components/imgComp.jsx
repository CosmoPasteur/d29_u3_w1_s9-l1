import { Component } from "react";

class ImageComponent extends Component {
  render() {
    console.log("THIS", this);

    return (
      <img
        src="https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Klausenplas"
        width={200}
      />
    );
  }
}
export default ImageComponent;
