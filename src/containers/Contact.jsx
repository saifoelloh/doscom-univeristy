import React from 'react';
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
        photo: '',
        name: '',
        sosmed: [
          {
            icon: '',
            name: '',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div>
        <Container>
          <h2>
            <b>
              <u>Kontak</u>
            </b>
          </h2>
          <Row>
            {this.state.arr.map((value, idx) => {
              return (
                <Col key={idx}>
                  <h3>
                    <b>Contact {idx + 1}</b>
                  </h3>
                  <Card>
                    <CardBody>
                      <div className="my-2 d-flex justify-content-around align-items-center">
                        <img
                          className="rounded-circle border mx-3 square-3"
                          src={value.photo}
                          alt=""
                        />
                        <h3>
                          <b>{value.name}</b>
                        </h3>
                      </div>
                      <ListGroup>
                        {value.sosmed.map((datum, id) => {
                          return (
                            <ListGroupItem
                              key={id}
                              className={id % 2 ? '' : 'bg-light'}>
                              <div className="my-2 d-flex justify-content-around align-items-center">
                                <img
                                  className="rounded-circle border mx-3 square-3"
                                  src={datum.icon}
                                  alt=""
                                />
                                <h3>
                                  <b>{datum.name}</b>
                                </h3>
                              </div>
                            </ListGroupItem>
                          );
                        })}
                      </ListGroup>
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
