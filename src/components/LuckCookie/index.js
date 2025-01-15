import React, { Component } from "react";

export default class LuckCookie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.sentences = ["Frase 1", "Frase 2", "Frase 3", "Frase 4"];

    this.broke = this.broke.bind(this);
  }

  broke() {
    let randomNumber = Math.floor(Math.random() * this.sentences.length);
    this.setState({
      ...this.state,
      text: this.sentences[randomNumber],
    });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.broke()} />
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Abrir biscoito</button>
      </div>
    );
  }
}
