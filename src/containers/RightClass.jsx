import React from 'react';
import { Col, Row } from 'reactstrap';

import { SingleCard } from '../components';

export default class RightClass extends React.Component {
  render() {
    return (
      <Row>
        <Col md="6" sm="12">
          <Row className="justify-content-center">
            <Col md="7" sm="7">
              <SingleCard datum={this.props.data} icon={this.props.icon} />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
