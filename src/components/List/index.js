import React, { Component } from "react";
import Feed from "./Feed";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          name: "Gabi",
        },
        {
          id: 2,
          name: "Cris",
        },
        {
          id: 3,
          name: "Cecilia",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.feed.map((item, index) => (
          <div key={index}>
            <Feed name={item.name} id={item.id} />
          </div>
        ))}
      </div>
    );
  }
}
