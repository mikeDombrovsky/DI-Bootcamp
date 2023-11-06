import React from "react";

class Example1 extends React.Component {
  render() {
    return (
      <ul>
        {this.props.socialMedias.map((media, i) => (
          <li key={i}>{media}</li>
        ))}
      </ul>
    );
  }
}

export default Example1;
