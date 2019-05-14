import React from 'react';
import {Row, Col, Container } from 'reactstrap';

export default class Hero extends React.Component {
  render() {
    return (
      <Row className="fullscreen">
        <Col
          md="6"
          className="d-flex flex-column justify-content-center align-items-center">
          <Container fluid>
            <h1 className="text-left">
              Ayo Kembangkan <br />
              <b className="text-primary">Minat</b> dan{' '}
              <b className="text-primary">Bakat</b>
              <br />
              Bersama Kami.
            </h1>
            <p>
              Training dengan metode yang memadukan beberapa kelas dan pengajar
              yang menyenangkan sesuai minat peserta.
            </p>
            <Row>
              <Col>
                <a className="btn btn-primary btn-lg rounded-pill btn-block" href="#daftar">Daftar</a>
              </Col>
              <Col>
                <a className="btn btn-outline-primary btn-lg rounded-pill btn-block" href="#kelas">Lihat Kelas</a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    );
  }
}
