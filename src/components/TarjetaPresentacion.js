import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/tarjetaPresentacion.scss'

function TarjetaPresentacion (props) {
  const {
    name = 'William  Ruiz',
    email = 'will.rui@gmail.com',
    listMaterias = ['Matematicas', 'Ingles', 'Artes Plasticas']
  } = props

  return (
    <Card className='tarjeta-presentacion' >
      <Card.Body>
        <Card.Text className='itemLabel titleLabel'>
          { name }
        </Card.Text>
        <Card.Text>
          { email }
        </Card.Text>
        <Card.Text className='itemLabel'>
          Materias Preferidas
        </Card.Text>
        <ListGroup as="ol" numbered>
          { listMaterias != null && listMaterias.length && listMaterias.map((item, index) => {
            return (
              <ListGroup.Item key={index} as="li" >{ item }</ListGroup.Item>
            )
          }) }
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default TarjetaPresentacion;