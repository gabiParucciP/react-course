import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };

    this.save = this.save.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  save(e) {
    const { name, email, password } = this.state;
    if (name === "" || email === "" || password === "") {
      this.setState({ error: "Preencha todos os campos" });
    } else {
      alert(`Nome: ${name} \n Email: ${email}`);
    }

    e.preventDefault();
  }

  onChangeValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.save}>
          Nome:
          <input
            name="name"
            value={this.state.name}
            onChange={this.onChangeValue}
          />
          <br />
          E-mail:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChangeValue}
          />
          <br />
          Senha:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChangeValue}
          />
          <br />
          <button type="submit">Salvar</button>
          {this.state.error && <span>{this.state.error}</span>}
        </form>
      </div>
    );
  }
}
