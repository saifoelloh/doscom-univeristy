import React from 'react';
import Slider from 'react-slick';
import { Card, CardBody, CardText, CardTitle, Container } from 'reactstrap';
import udin from '../assets/img/pemateri-01.png';
import izza from '../assets/img/pemateri-02.png';
import aan from '../assets/img/pemateri-03.png';
import restu from '../assets/img/pemateri-04.png';
import alfin from '../assets/img/pemateri-05.png';
import ilham from '../assets/img/pemateri-06.png';

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
        name: 'Solehudin',
        photo: udin,
        title: 'Anggota Devisi Programming',
        class: 'Kelas Python',
      },
      {
        id: 1,
        name: 'Muh. Izza Lutfi',
        photo: izza,
        title: 'Anggota Devisi Programming',
        class: 'Kelas Web Lanjut',
      },
      {
        id: 2,
        name: 'Moh. Farchan A',
        photo: aan,
        title: 'Anggota Devisi Programming',
        class: 'Kelas Mobile App',
      },
      {
        id: 3,
        name: 'Restu Indera H',
        photo: restu,
        title: 'Koor Devisi Jaringan',
        class: 'Kelas Jaringan',
      },
      {
        id: 4,
        name: 'Alfin Maghfiroh',
        photo: alfin,
        title: 'Koor Devisi Game',
        class: 'Kelas Game',
      },
      {
        id: 5,
        name: 'M. Ilham Haqqi',
        photo: ilham,
        title: 'Koor Devisi Programming',
        class: 'Ketua Acara',
      },
    ],
  };
  render() {
    return (
      <div className="bg-light p-md-5 p-sm-4 tutor fullscreen">
        <Container className="h-100 d-flex flex-column justify-content-center">
          <h1 className="text-center text-white mb-5">
            <b>
              <u>Pengajar</u>
            </b>
          </h1>
          <Slider className="mt-5" {...this.state.setting}>
            {this.state.arr.map((value) => {
              return (
                <div key={value.id} className="d-flex justify-content-center">
                  <Card className="w-75 shadow-sm">
                    <CardBody className="py-5 px-3 d-flex flex-column justify-content-center align-items-center">
                      <img
                        className="rounded-circle square-7 shadow mb-4"
                        src={value.photo}
                        alt={value.name}
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
