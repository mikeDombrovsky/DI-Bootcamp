import React from "react";

class Example3 extends React.Component {
  render() {
    return (
      <>
        {this.props.experiences.map(({ logo, companyName, url, roles }, i) => {
          return (
            <div key={i}>
              <img src={logo} />
              <br />
              <a href={url}>{companyName}</a>
              <br />
              {roles.map(({ title, startDate, location, description }, j) => {
                return (
                  <div key={j}>
                    <p>
                      <b>{title}</b>
                    </p>
                    <p>
                      {startDate} {location}
                    </p>
                    <p>{description}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
}

export default Example3;
