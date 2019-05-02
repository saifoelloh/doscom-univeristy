import React from 'react';
import {Container} from 'reactstrap';

import {Hero, Navigation} from '../components';

export default class Header extends React.Component {
  render() {
    return (
      <div className="hero">
        <Container>
          <Navigation style={{zIndex: '100'}} />
          <Hero />
        </Container>
      </div>
    );
  }
}
