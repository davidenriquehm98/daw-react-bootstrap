import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../styles/formulario.scss';

function Formulario() {
  return (
    <Form onSubmit={(e) => { e.preventDefault() }} >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" placeholder="Descripción" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDueDate">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <div id='formActions' >
        <Button variant="primary" type="submit">
          Agregar Objetivo
        </Button>
      </div>
    </Form>
  );
}

export default Formulario;