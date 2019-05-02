import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar expand="md">
        <NavbarBrand href="/">Doscom University</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="#kelas">
                Kelas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#pengajar">
                Pengajar
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#tempat">
                Tempat
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#jadwal">
                Jadwal
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="#kontak">
                Kontak
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
