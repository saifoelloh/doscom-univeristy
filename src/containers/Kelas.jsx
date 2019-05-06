import React from 'react';
import { Container } from 'reactstrap';

import LeftClass from './LeftClass';
import RightClass from './RightClass.jsx';
import webDasar from '../assets/img/icon-webdasar.png';
import webLanjut from '../assets/img/icon-weblanjut.png';
import android from '../assets/img/icon-android.png';
import jaringan from '../assets/img/icon-jaringan.png';
import game from '../assets/img/icon-game.png';

export default class Kelas extends React.Component {
  state = {
    data: this.props.data,
    icon: [webDasar, webLanjut, android, jaringan, game],
  };

  render() {
    return (
      <div id="kelas" className="bg-kelas">
        <Container className="py-5">
          <h2 className="text-center mb-4">
            <b>
              <u>Kelas &amp; Materi</u>
            </b>
          </h2>
          {this.state.data.map((value, idx) => {
            if (idx % 2) {
              return (
                <Container key={value._id}>
                  <LeftClass data={value} icon={this.state.icon[idx]} />
                </Container>
              );
            } else {
              return (
                <Container key={value._id}>
                  <RightClass data={value} icon={this.state.icon[idx]} />
                </Container>
              );
            }
          })}
        </Container>
      </div>
    );
  }
}
