import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

import Aux from '../hoc/Auxiliary.jsx';
import adin from '../assets/img/cp-1.png';
import carissa from '../assets/img/cp-2.png';

export default class Contact extends React.Component {
  state = {
    arr: [
      {
        photo: carissa,
        name: 'Kak Carissa',
        sosmed: [
          {
            icon: ['fab', 'telegram'],
            value: '@Carisa23',
          },
          {
            icon: ['fab', 'whatsapp'],
            value: 'xxx',
          },
          {
            icon: 'envelope',
            value: 'carissa.huang88.ch',
          },
        ],
      },
      {
        photo: adin,
        name: 'Kak Maulana',
        sosmed: [
          {
            icon: ['fab', 'telegram'],
            value: '@maulanacomara',
          },
          {
            icon: ['fab', 'whatsapp'],
            value: 'xxx',
          },
          {
            icon: 'envelope',
            value: 'maulanacomara',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="fs-100 bg-light">
        <Container className="h-100 d-flex flex-column justify-content-center">
          <h1 className="text-center mb-5">
            <b>
              <u>Kontak</u>
            </b>
          </h1>
          <Row>
            {this.state.arr.map((datum, idx) => {
              return (
                <Col
                  className="d-flex flex-column justify-content-center align-items-center"
                  key={idx}>
                  <h3 className="mb-5">
                    <b>Contact {idx + 1}</b>
                  </h3>
                  <Card className="rounded-lg shadow w-75">
                    <CardBody>
                      <Row>
                        <Col
                          md="12"
                          sm="12"
                          className="d-flex justify-content-center align-items-center">
                          <Row className="w-100">
                            <Col
                              md="4"
                              sm="4"
                              className="d-flex justify-content-center align-items-center mb-4">
                              <img
                                className="square-4 rounded"
                                src={datum.photo}
                                alt={datum.name}
                              />
                            </Col>
                            <Col
                              md="8"
                              sm="8"
                              className="d-flex align-items-center mb-4">
                              <p className="mb-0">
                                <b>{datum.name}</b>
                              </p>
                            </Col>
                          </Row>
                          <div />
                        </Col>
                        <Col md="12" sm="12">
                          <Row>
                            {datum.sosmed.map((data, idx) => {
                              return (
                                <Aux key={idx}>
                                  <Col
                                    md="4"
                                    sm="4"
                                    className="d-flex justify-content-center align-items-center mb-2">
                                    <FontAwesomeIcon
                                      icon={data.icon}
                                      size="lg"
                                    />
                                  </Col>
                                  <Col
                                    md="8"
                                    sm="8"
                                    className="d-flex justify-content-start align-items-center mb-2">
                                    <p className="mb-0">{data.value}</p>
                                  </Col>
                                </Aux>
                              );
                            })}
                          </Row>
                        </Col>
                      </Row>
                      <div className="p-0 d-flex align-items-center" />
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
