import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';

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
  };
  render() {
    return (
      <div className="bg-light py-5 fullscreen">
        <Container className="h-100 d-flex flex-column justify-content-center">
          <h2 className="text-center mb-5">
            <b>
              <u>Waktu &amp; Tempat</u>
            </b>
          </h2>
          <Row>
            <Col
              md="6"
              sm="12"
              className="mt-5 d-flex justify-content-end align-items-center">
              <ListGroup className="w-75">
                {this.state.arr.map((value) => {
                  return (
                    <ListGroupItem
                      key={value.id}
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
          </Row>
        </Container>
      </div>
    );
  }
}
