import React from "react";

export class MenuImg extends React.Component {
  render() {
    return (
      <img
        className="RecommendedBar__img--responsive"
        src={this.props.img_url}
        alt={this.props.menu_name}
      />
    );
  }
}
