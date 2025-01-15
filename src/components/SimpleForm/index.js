import React, { Component } from "react";

export default class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      city: "",
    };
  }

  render() {
    return (
      <div>
        Email:
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />{" "}
        <br />
        Senha:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />
        <select
          name="city"
          value={this.state.city}
          onChange={(e) => this.setState({ city: e.target.value })}
        >
          <option value="maringa">Maringá</option>
          <option value="sarandi">Sarandi</option>
        </select>
      </div>
    );
  }
}
