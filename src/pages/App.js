import React from 'react';
import Item from './../components/Item';
import Formulario from './../components/Formulario';
import Menu from './../components/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <Menu />
      <Container fluid="xxl" >
        <Button id='buttonFloat' variant="primary" onClick={() => setModalShow(true)}>
          Agregar Objetivo
        </Button>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <span className='item-label' >
              Agregar Objetivo
            </span>
          </Modal.Header>
          <Modal.Body>
            <Formulario />
          </Modal.Body>
        </Modal>
        <Row>
          <Col sm={true} >
            <Formulario />
          </Col>
          <Col>
            <Item />
            <Item />
            <Item />
            <Item />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
