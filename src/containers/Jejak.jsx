import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'reactstrap';

export default class Jejak extends React.Component {
  state = {
    arr: [
      {
        icon: ['fab', 'telegram'],
        link: 'https://t.me/doscomedia',
      },
      {
        icon: ['fab', 'instagram'],
        link: 'https://www.instagram.com/doscomedia/',
      },
      {
        icon: ['fab', 'github'],
        link: 'https://github.com/DOSCOM',
      },
      {
        icon: ['fab', 'facebook'],
        link: 'https://www.facebook.com/groups/doscomedia/',
      },
    ],
  };
  render() {
    return (
      <div className="fs-50">
        <Container className="h-100 d-flex justify-content-center align-items-center">
          <Row>
            <Col md="6" sm="6">
              <img src="" alt="" />
              <h2>
                <b>Tentang Doscom</b>
              </h2>
              <p className="mb-0">
                Doscom adalah suatu komunitas open source dari universitas dian
                nuswantoro semarang.
                <br />
                Kami memiliki tujuan untuk mengopen sourcekan masyarakat dan
                memasyarakakan open source sehingga mudah diterima di lingkungan
                masyarakat.
              </p>
            </Col>
            <Col
              md="6"
              sm="6"
              className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <h2>
                  <b>Social Media</b>
                </h2>
                <span>
                  {this.state.arr.map((datum, idx) => {
                    return (
                      <a
                        className="ml-3"
                        href={datum.link}
                        target="_blank"
                        key={idx}>
                        <FontAwesomeIcon icon={datum.icon} size="2x" />
                      </a>
                    );
                  })}
                </span>
                <p className="mb-0 text-center">
                  sekretariat@doscom.org
                  <br />
                  www.doscom.org
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
