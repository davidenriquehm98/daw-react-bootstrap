import React from 'react';
import Item from './../components/Item';
import Formulario from './../components/Formulario';
import Menu from './../components/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeGoal } from '../reducers/goals'
import { removeTask } from '../reducers/tasks'
// import TarjetaPresentacion from '../components/TarjetaPresentacion';
import './../styles/app.scss';

function App() {
  const globalMode = useSelector((state) => state.globalMode.value)
  const goals = useSelector((state) => state.goals.value)
  const tasks = useSelector((state) => state.tasks.value)
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch()

  const deleteItem = (item) => {
    if (item.type === 'task') {
      const indexItem = tasks.indexOf(item)
      if (indexItem >= 0) {
        dispatch(removeTask(indexItem))
      }
    }
    if (item.type === 'goal') {
      const indexItem = goals.indexOf(item)
      if (indexItem >= 0) {
        dispatch(removeGoal(indexItem))
      }
    }
  }

  return (
    <div className="App">
      <Menu />
      <Container fluid="xxl" >
        <Button id='buttonFloat' className=' d-sm-block d-md-none shadow-lg btn-sm' variant="primary" onClick={() => setModalShow(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <title>plus</title>
            <g fill="#FFFFFF"><path d="M14.75,9.75H3.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H14.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" fill="#FFFFFF"></path><path d="M9,15.5c-.414,0-.75-.336-.75-.75V3.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75V14.75c0,.414-.336,.75-.75,.75Z" fill="#FFFFFF"></path></g>
          </svg>
          Agregar { globalMode === 'tasks' ? 'Tarea' : 'Objetivo' }
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
              Agregar { globalMode === 'tasks' ? 'Tarea' : 'Objetivo' }
            </span>
          </Modal.Header>
          <Modal.Body>
            <Formulario />
          </Modal.Body>
        </Modal>
        <Row>
          <Col sm={true} className='d-none d-sm-none d-md-block' >
            <Formulario />
          </Col>
          <Col>
            <div className='scrolling' >
              { globalMode === 'tasks' && tasks.map((task, idx) => {
                return (<Item key={idx} type='task' data={task} onDelete={deleteItem} />)
              }) }
              {  globalMode === 'goals' && goals.map((goal, idx) => {
                return (<Item key={idx} type='goal' data={goal} onDelete={deleteItem} />)
              }) }
            </div>
          </Col>
        </Row>
        {/* <TarjetaPresentacion></TarjetaPresentacion> */}
      </Container>
    </div>
  );
}

export default App;
