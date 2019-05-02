import React from 'react';
import Slider from 'react-slick';
import { Card, CardBody, CardText, CardTitle, Container } from 'reactstrap';

export default class Tentors extends React.Component {
  state = {
    setting: {
      accessibility: true,
      autoplaySpeed: 500,
      arrows: true,
      infinite: true,
      draggable: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    },
    arr: [
      {
        id: 0,
        name: 'Moh. Saifoelloh',
        title: 'Anggota Devisi Programming',
        class: 'Kelas Web Dasar',
      },
      {
        id: 1,
        name: 'Muh. Izza Lutfi',
        title: 'Anggota Devisi Programming',
        class: 'Kelas Web Lanjut',
      },
      {
        id: 2,
        name: 'Moh. Farchan A',
        title: 'Anggota Devisi Programming',
        class: 'Kelas Mobile App',
      },
      {
        id: 3,
        name: 'Restu Indera H',
        title: 'Koor Devisi Jaringan',
        class: 'Kelas Jaringan',
      },
      {
        id: 4,
        name: 'Alfin Maghfiroh',
        title: 'Koor Devisi Game',
        class: 'Kelas Game',
      },
      {
        id: 5,
        name: 'M. Ilham Haqqi',
        title: 'Koor Devisi Programming',
        class: 'Ketua Acara',
      },
    ],
  };
  render() {
    return (
      <div className="bg-light p-md-5 p-sm-4 tutor fullscreen">
        <Container className="h-100 d-flex flex-column justify-content-center">
          <h2 className="text-center text-white mb-5">
            <b>
              <u>Pengajar</u>
            </b>
          </h2>
          <Slider className="mt-5" {...this.state.setting}>
            {this.state.arr.map((value) => {
              return (
                <div key={value.id} className="d-flex justify-content-center">
                  <Card className="w-75 shadow-sm">
                    <CardBody className="py-5 px-3 d-flex flex-column justify-content-center align-items-center">
                      <div
                        className="bg-primary rounded-circle mb-4"
                        style={{ height: '7rem', width: '7rem' }}
                      />
                      <CardTitle>
                        <b>{value.name}</b>
                      </CardTitle>
                      <hr className="m-0 w-50" />
                      <CardText className="my-3 text-center px-3">
                        {value.title}
                        <br />
                        {value.class}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
}
