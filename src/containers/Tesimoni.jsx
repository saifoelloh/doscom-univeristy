import React from 'react';
import Slider from 'react-slick';
import { Container } from 'reactstrap';

export default class Testimoni extends React.Component {
  state = {
    setting: {
      accessibility: true,
      autoplaySpeed: 500,
      arrows: true,
      infinite: true,
      draggable: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    arr: [
      {
        message: 'hello world loop up the sky is a beautiful day',
        name: 'Giorno Giovana',
        photo:
          'https://i1.sndcdn.com/artworks-000461036067-q0vgrc-t500x500.jpg',
      },
      {
        message: 'hello world loop up the sky is a beautiful day',
        name: 'Bruno Buccillati',
        photo:
          'https://i1.sndcdn.com/artworks-000461036067-q0vgrc-t500x500.jpg',
      },
      {
        message: 'hello world loop up the sky is a beautiful day',
        name: 'Mista Guido',
        photo:
          'https://i1.sndcdn.com/artworks-000461036067-q0vgrc-t500x500.jpg',
      },
      {
        message: 'hello world loop up the sky is a beautiful day',
        name: 'Leone Abbacchio',
        photo:
          'https://i1.sndcdn.com/artworks-000461036067-q0vgrc-t500x500.jpg',
      },
    ],
  };
  render() {
    return (
      <div className="tutor fs-75">
        <Container className="h-100 d-flex flex-column justify-content-center">
          <h2 className="text-center text-white mb-5">
            <b>
              <u>Testimoni</u>
            </b>
          </h2>
          <Slider className="my-4" {...this.state.setting}>
            {this.state.arr.map((value, idx) => {
              return (
                <div
                  key={idx}
                  className="d-flex flex-column justify-content-center align-items-center">
                  <blockquote className="blockquote">
                    <p className="mb-0">{value.message}</p>
                  </blockquote>
                  <div className="my-2 d-flex justify-content-around align-items-center">
                    <img
                      className="rounded-circle border mx-3"
                      src={value.photo}
                      style={{ width: '3rem' }}
                      alt=""
                    />
                    <p className="m-0">
                      <b>{value.name}</b>
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
}
