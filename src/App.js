import * as axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faClock,
  faCreditCard,
  faEnvelope,
  faMapMarkerAlt,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Code } from 'react-content-loader';
import { Container } from 'reactstrap';

import {
  About,
  Contact,
  Header,
  Jejak,
  Kelas,
  Registration,
  Schedule,
  Tentors,
} from './containers';
import { Aux } from './hoc';

library.add(faWallet, faClock, faMapMarkerAlt, faEnvelope, fab, faCreditCard);

export default class App extends React.Component {
  state = {
    loading: true,
    data: [],
    arr: [
      {
        about:
          'Mempelajari bagaimana cara membuat sebuah website menggunakan bahasa pemprograman python.',
      },
      {
        about:
          'Mempelajari code igniter sebuah framework bahasa pemrograman php yang menggunakan konsep MVC.',
      },
      {
        about:
          'Membuat aplikasi sederhana berbasis android yang dibuat menggunakan bahasa Java & XML.',
      },
      {
        about:
          'Mempelajari alur dari sebuah jaringan, dan menerapkannya dalam sebuah simulasi virual.',
      },
      {
        about: 'Membuat sebuah game sederhana menggunakan Cocos Game Engine.',
      },
    ],
  };

  getData = () => {
    axios('http://35.198.253.82:3000/api/kelas')
      .then((res) => {
        console.log(res);
        this.setState({
          loading: !this.state.loading,
          data: res.data.map((value, idx) => {
            return {
              ...value,
              about: this.state.arr[idx].about,
            };
          }),
        });
        console.log(this.state.data, 'ini hasil get dari api');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  code = () => <Code />;

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Container className="fullscreen py-5 d-flex justify-content-center align-items-center">
            {this.code()}
          </Container>
        ) : (
          <Aux>
            <Header />
            <Kelas data={this.state.data} />
            <Tentors />
            <About />
            <Schedule />
            <Registration data={this.state.data} />
            <Contact />
            <Jejak />
          </Aux>
        )}
      </div>
    );
  }
}
