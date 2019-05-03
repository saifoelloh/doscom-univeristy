import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

import jadwal from '../assets/json/schedule.json';

export default class Schedule extends React.Component {
  state = {
    arr: jadwal.data,
    jadwal: {},
    loading: true,
  };

  handleClick = (id) => {
    this.setState({
      jadwal: this.state.arr[id],
    });
  };

  componentDidMount() {
    this.setState({
      jadwal: this.state.arr[0],
      loading: !this.state.loading,
    });
  }

  render() {
    return (
      <div className="p-5 bg-info">
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center mb-5">
            <b>
              <u>Jadwal</u>
            </b>
          </h2>
          <section>
            <ButtonGroup className="my-4">
              {this.state.arr.map((value) => {
                return (
                  <Button
                    key={value.id}
                    color="link"
                    className="mx-3"
                    onClick={() => {
                      this.handleClick(value.id);
                    }}>
                    {value.name}
                  </Button>
                );
              })}
            </ButtonGroup>
            {this.state.loading ? (
              <h1>loading</h1>
            ) : (
              <Container>
                <ListGroup>
                  {this.state.jadwal.schedules.map((value, idx) => {
                    return (
                      <ListGroupItem
                        key={idx}
                        className="mb-4 rounded-lg h-75 shadow-sm">
                        <Row>
                          <Col>
                            <p className="m-0">Materi</p>
                            <h4>
                              <b>{value.about}</b>
                            </h4>
                            <p className="m-0">{value.lesson}</p>
                          </Col>
                          <Col className="text-right">
                            <p className="m-0">{value.date}</p>
                            <h4>
                              <b>{value.place}</b>
                            </h4>
                            <p className="m-0">{value.time}</p>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
              </Container>
            )}
          </section>
        </Container>
      </div>
    );
  }
}
