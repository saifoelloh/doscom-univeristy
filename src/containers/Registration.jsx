import * as axios from 'axios';
import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import * as swal from 'sweetalert';

export default class Registration extends React.Component {
  state = {
    nama: '',
    email: '',
    telp: '',
    telegram: '',
    kelas: this.props.data[0]._id,
    instansi: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCancel = () => {
    this.setState({
      nama: '',
      email: '',
      telp: '',
      telegram: '',
      kelas: '',
      instansi: '',
    });
  };

  handleSubmit = () => {
    const data = {
      nama: this.state.nama,
      email: this.state.email,
      telp: this.state.telp,
      instansi: this.state.instansi,
      id_tele: this.state.telegram,
      kelas: this.state.kelas,
    };

    axios
      .post('http://35.198.253.82:3000/api/daftar', data)
      .then((res) => {
        swal({
          icon: 'success',
          text: 'please chek your email to comleate regisration',
        });
      })
      .then(() => {
        this.handleCancel();
      })
      .catch((err) => {
        swal({
          icon: 'error',
          text: err.response.data.message,
        });
        console.error(err.response);
        this.handleCancel();
      });
  };

  render() {
    return (
      <div id="daftar" className="fs-100">
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center mb-5">
            <b>
              <u>Form Pendaftaran</u>
            </b>
          </h2>
          <Form className="w-75 d-flex flex-column justify-content-center align-items-center">
            <Row className="w-100">
              <Col md="6">
                <FormGroup>
                  <Label>Nama Lengkap</Label>
                  <Input
                    type="text"
                    name="nama"
                    placeholder="Ketik disini"
                    value={this.state.nama}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Label>No Telepon</Label>
                  <Input
                    type="text"
                    name="telp"
                    placeholder="628xxxxxxx"
                    value={this.state.telp}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Instansi</Label>
                  <Input
                    type="text"
                    name="instansi"
                    placeholder="komunitas xxxx"
                    value={this.state.instansi}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <FormGroup>
                    <Label>Telegram ID</Label>
                    <Input
                      type="text"
                      name="telegram"
                      placeholder="@username"
                      value={this.state.telegram}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Label>Kelas</Label>
                  <Input
                    type="select"
                    name="kelas"
                    onChange={this.handleChange}>
                    {this.props.data.map((value, idx) => {
                      return (
                        <option key={idx} value={value._id}>
                          {value.nama}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <ButtonGroup className="w-50 mt-4">
              <Button color="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
              <Button color="warning" onClick={this.handleCancel}>
                Cancel
              </Button>
            </ButtonGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
