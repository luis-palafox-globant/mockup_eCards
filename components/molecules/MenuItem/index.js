import React from "react";
import { MenuTitle } from "../../atoms/MenuTitle";
import { MenuImg } from "../../atoms/MenuImg";
import "./style.scss";

export class MenuItem extends React.Component {
  render() {
    return (
      <div className="RecommendedBar__item">
        <MenuTitle name={this.props.name} />
        <MenuImg img_url={this.props.img_url} />
      </div>
    );
  }
}
