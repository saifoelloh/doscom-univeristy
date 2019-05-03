import * as axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClock,
  faMapMarkerAlt,
  faWallet,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Code } from 'react-content-loader';
import { Container } from 'reactstrap';

import {
  About,
  Header,
  Kelas,
  Registration,
  Schedule,
  Tentors,
  Testimoni,
  Contact,
} from './containers';
import { Aux } from './hoc';

library.add(faWallet, faClock, faMapMarkerAlt, faEnvelope, fab);

export default class App extends React.Component {
  state = {
    loading: true,
    data: [],
    arr: [
      {
        about:
          'Mempelajari alur dari sebuah web, serta membuat web sederhana dengan HTML, CSS, & Javascript.',
      },
      {
        about:
          'Mempelajari alur dari sebuah web, serta membuat web sederhana dengan HTML, CSS, & Javascript.',
      },
      {
        about:
          'Mempelajari alur dari sebuah web, serta membuat web sederhana dengan HTML, CSS, & Javascript.',
      },
      {
        about:
          'Mempelajari alur dari sebuah web, serta membuat web sederhana dengan HTML, CSS, & Javascript.',
      },
      {
        about:
          'Mempelajari alur dari sebuah web, serta membuat web sederhana dengan HTML, CSS, & Javascript.',
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
            <Testimoni />
            <Registration data={this.state.data} />
            <Contact />
          </Aux>
        )}
      </div>
    );
  }
}
