import React, { Component } from "react";

export default class Feed extends Component {
  render() {
    return (
      <div>
        <span>
          {this.props.id} - {this.props.name}
        </span>
      </div>
    );
  }
}
