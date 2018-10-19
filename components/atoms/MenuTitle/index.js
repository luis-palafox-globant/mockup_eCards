import React from "react";

export class MenuTitle extends React.Component {
  render() {
    return <p className="RecommendedBar__title">{this.props.name}</p>;
  }
}
