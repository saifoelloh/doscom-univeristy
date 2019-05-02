import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap';

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
                <Button
                  color="primary"
                  size="lg"
                  block
                  className="rounded-pill">
                  Daftar
                </Button>
              </Col>
              <Col>
                <Button
                  outline
                  color="primary"
                  size="lg"
                  block
                  className="rounded-pill">
                  Lihat Kelas
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    );
  }
}
