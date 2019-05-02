import React from 'react';

import { Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

export default class SingleCard extends React.Component {
  state = {
    web: 10,
  };
  render() {
    return (
      <section className="d-flex flex-column justify-content-center align-items-center">
        <img
          src={this.props.icon}
          alt={this.props.datum.name}
          className="rounded m-md-5 m-sm-3 square-5"
        />
        <Card className="rounded shadow">
          <CardBody>
            <CardTitle>
              <b>{this.props.datum.nama}</b>
            </CardTitle>
            <CardText>{this.props.datum.about}</CardText>
          </CardBody>
          <CardFooter className="d-flex flex-row align-items-center justify-content-between">
            <p className="m-0">
              Kuota tersisa <b>{this.props.datum.jumlah}</b>/25
            </p>
            <a href="#daftar" className="btn btn-secondary rounded-circle">
              &gt;
            </a>
          </CardFooter>
        </Card>
      </section>
    );
  }
}
