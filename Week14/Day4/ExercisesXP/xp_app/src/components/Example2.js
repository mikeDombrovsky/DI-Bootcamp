import React from "react";

class Example2 extends React.Component {
  render() {
    return (
      <div>
        {this.props.skills.map(({ Area, SkillSet }, i) => {
          return (
            <div key={{ i }}>
              <h3>{Area}</h3>
              <ul>
                {SkillSet.map(({ Name }) => (
                  <li key={Name}>{Name}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Example2;
