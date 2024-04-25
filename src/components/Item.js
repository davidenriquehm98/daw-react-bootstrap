import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './../styles/item.scss';
function Item() {
  return (
    <Card>
      <Card.Body>
        <Card.Text className='itemLabel'>
          Nombre
        </Card.Text>
        <Card.Text>
          Realizar Proyecto
        </Card.Text>
        <Card.Text className='itemLabel'>
          Descripción
        </Card.Text>
        <Card.Text>
          Elaborar proyecto del curso de DAW.
        </Card.Text>
        <Card.Text className='itemLabel'>
          Fecha de Vencimiento
        </Card.Text>
        <Card.Text>
          01/05/2024
        </Card.Text>
        <div className='cardActions' >
          <Button className='mx-2 my-1' variant="info">Editar</Button>
          <Button className='mx-2 my-1' variant="info">Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;