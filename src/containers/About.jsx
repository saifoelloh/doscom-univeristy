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

import { Aux } from '../hoc';

export default class About extends React.Component {
  state = {
    arr: [
      {
        id: 0,
        icon: 'wallet',
        first: 'Biaya Pendaftaran',
        second: 'Rp. 25.000,00',
        third: 'Sertifikat & Merchendise',
      },
      {
        id: 1,
        icon: 'clock',
        first: 'Waktu Kegiaan',
        second: '11 & 18 Mei 2019',
        third: '2 Pertemuan & 1 Tugas Akhir',
      },
      {
        id: 2,
        icon: 'map-marker-alt',
        first: 'Tempat Kegiatan',
        second: 'Ged. G - Udinus',
        third: 'Lihat Peta',
      },
    ],
    pembayaran: [
      {
        metode: 'On The Spot',
        icon: 'map-marker-alt',
        items: ['bayar di camp Doscom', 'bayar di stand Doscom University'],
      },
      {
        metode: 'Transfer',
        icon: 'credit-card',
        items: ['Mandiri - 1360016257054', 'BRI - 667201024885534'],
      },
    ],
    detail: null,
  };

  handleClick = (id) => {
    let hasil;
    if (id === 0) {
      hasil = <Pembayaran data={this.state.pembayaran} />;
    } else if (id === 1) {
      hasil = this.state.detail;
    } else if (id === 2) {
      hasil = <Peta />;
    }

    this.setState({
      detail: hasil,
    });
  };

  componentDidMount() {
    this.setState({
      detail: <Pembayaran data={this.state.pembayaran} />,
    });
  }

  render() {
    return (
      <div id="tempat" className="py-5 fullscreen bg-about">
        <Container className="h-100 d-flex flex-column justify-content-center">
          <h1 className="text-center text-white mb-5">
            <b>
              <u>Waktu &amp; Tempat</u>
            </b>
          </h1>
          <Row>
            <Col
              md="6"
              sm="12"
              className="mt-5 d-flex justify-content-start align-items-center">
              <ListGroup className="w-75">
                {this.state.arr.map((value) => {
                  return (
                    <ListGroupItem
                      key={value.id}
                      onClick={() => {
                        this.handleClick(value.id);
                      }}
                      className="h-75 d-flex align-items-center mb-4 rounded-lg shadow-sm">
                      <FontAwesomeIcon
                        icon={value.icon}
                        size="3x"
                        className="mr-4 my-2"
                      />
                      <div>
                        <p className="m-0 text-secondary">{value.first}</p>
                        <h4>
                          <b>{value.second}</b>
                        </h4>
                        <p className="m-0 text-secondary">{value.third}</p>
                      </div>
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            </Col>
            <Col
              md="6"
              sm="12"
              className="mt-5 d-flex justify-content-center align-items-center">
              <Card className="w-100 h-100 mb-4">
                <CardBody className="d-flex flex-column justify-content-center">
                  <Container className="h-100 d-flex flex-column justify-content-center">
                    {this.state.detail}
                  </Container>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function Pembayaran(props) {
  return (
    <Aux>
      {props.data.map((datum, idx) => {
        return (
          <Aux key={idx}>
            <h4>
              <b>
                <FontAwesomeIcon icon={datum.icon} size="lg" /> {datum.metode}
              </b>
            </h4>
            <ul className="mb-3">
              {datum.items.map((data, id) => {
                return <li key={id}>{data}</li>;
              })}
            </ul>
          </Aux>
        );
      })}
    </Aux>
  );
}

function Peta() {
  return (
    <div className="w-100 h-100">
      <iframe
        className="w-100 h-100"
        title="peta udinus"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(udinus)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0">
        <a href="https://www.maps.ie/map-my-route/">Draw map route</a>
      </iframe>
    </div>
  );
}
