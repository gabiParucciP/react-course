import { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
    };
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
  }

  signin() {
    this.setState({ name: "Gabisssss" });
  }

  signout() {
    this.setState({ name: "" });
  }

  render() {
    return (
      <div>
        <span>{this.state.name}</span>
        <button onClick={this.signin}>Entrar como Gabi</button>
        <button onClick={this.signout}>Sair</button>
      </div>
    );
  }
}

export default Member;
