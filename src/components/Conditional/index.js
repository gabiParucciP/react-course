import { Component } from "react";

class Conditional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ status: true });
  }

  logout() {
    this.setState({ status: false });
  }

  render() {
    return (
      <div>
        {this.state.status ? (
          <div>
            <h1>Bem-vindo</h1>
            <button onClick={this.logout}>Sair</button>
          </div>
        ) : (
          <div>
            <h2>Olá, faça o login</h2>
            <button onClick={this.login}>Entrar</button>
          </div>
        )}
      </div>
    );
  }
}

export default Conditional;
