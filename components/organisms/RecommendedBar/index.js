import { Col } from "react-bootstrap";
import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import { MenuItem } from "../../molecules/MenuItem";
import { FindTitle } from "../../atoms/FindTitle";

export default class index extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    axios.get(`http://nr3zj.mocklab.io/recommended/season`).then(res => {
      const items = res.data.data;
      this.setState({ items });
    });
  }
  render() {
    return (
      <div className="RecommendedBar">
        <Col xs={12} sm={2}>
          <FindTitle />
        </Col>
        <Col xs={12} sm={8}>
          {this.state.items.map(item => (
            <Link as={item.menu_name} href={item.menu_name} key={item.menu_id}>
              <a>
                <MenuItem
                  name={item.menu_name}
                  img_url={item.image_url}
                  key={item.menu_id}
                />
              </a>
            </Link>
          ))}
        </Col>
        <Col xs={12} sm={2}>
          <FindTitle />
        </Col>
      </div>
    );
  }
}
