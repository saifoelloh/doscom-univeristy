import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardBody,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

export default class Contact extends React.Component {
  state = {
    arr: [
      {
        photo:
          'http://mahasiswa.dinus.ac.id/images/foto/A/A11/2016/A11.2016.09407.jpg',
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
        photo:
          'http://mahasiswa.dinus.ac.id/images/foto/A/A11/2016/A11.2016.09392.jpg',
        name: 'Kak Adin',
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
          <h2>
            <b>
              <u>Kontak</u>
            </b>
          </h2>
          <Row>
            {this.state.arr.map((datum, idx) => {
              return (
                <Col key={idx}>
                  <h3>
                    <b>Contact {idx + 1}</b>
                  </h3>
                  <Card className="rounded-lg shadow w-75">
                    <CardBody className="p-0" />
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
