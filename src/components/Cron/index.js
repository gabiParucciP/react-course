import React, { Component } from "react";

export default class Cron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.timer = null;
    this.go = this.go.bind(this);
    this.clean = this.clean.bind(this);
  }

  go() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(() => {
        this.setState({
          ...this.state,
          number: this.state.number + 0.1,
        });
      }, 100);
    }
  }

  clean() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ...this.state,
      number: 0,
    });
  }

  render() {
    return (
      <div>
        <a>{this.state.number.toFixed(1)}</a>
        <div>
          <button onClick={this.go}>
            {this.timer !== null ? "Parar" : "Vai"}
          </button>
          <button onClick={this.clean}>LIMPAR</button>
        </div>
      </div>
    );
  }
}
