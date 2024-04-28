import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './../styles/item.scss';
function Item(props) {
  const {
    data = {},
    type = 'goal',
    onEdit = () => {},
    onDelete = () => {}
  } = props

  return (
    <Card className={` card-${type} `} >
      <Card.Body>
        <Card.Text className='itemLabel'>
          Nombre
        </Card.Text>
        <Card.Text>
          { data.name }
        </Card.Text>
        <Card.Text className='itemLabel'>
          Descripción
        </Card.Text>
        <Card.Text>
          { data.description }
        </Card.Text>
        <Card.Text className='itemLabel'>
          Fecha de Vencimiento
        </Card.Text>
        <Card.Text>
          { data.due_date }
        </Card.Text>
        <div className='cardActions' >
          <Button className='mx-2 my-1' variant="info" onClick={() => { onEdit(data) }} >Editar</Button>
          <Button className='mx-2 my-1' variant="info" onClick={() => { onDelete(data) }} >Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;