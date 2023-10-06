import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="">
        <Row className="">
          {contentData.map((col, i) => (
            <Col key={i} md={5} className="">
              <h6 className="">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="" />
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;
