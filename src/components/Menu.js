import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch } from 'react-redux'
import { setGlobalMode } from '../reducers/globalMode'
import { useSelector } from 'react-redux'
import './../styles/menu.scss';

function Menu() {
  const globalMode = useSelector((state) => state.globalMode.value)
  const goals = useSelector((state) => state.goals.value)
  const tasks = useSelector((state) => state.tasks.value)
  const dispatch = useDispatch()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" onClick={() => { dispatch(setGlobalMode('tasks')) }} >MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={`opc-menu ${globalMode === 'tasks' && 'opc-menu--active'}`}
              href="#tasks"
              onClick={() => { dispatch(setGlobalMode('tasks')) }} >
              Tareas
              <div className='count' >
                { tasks.length }
              </div>
            </Nav.Link>
            <Nav.Link
              className={`opc-menu ${globalMode === 'goals' && 'opc-menu--active'}`}
              href="#goals"
              onClick={() => { dispatch(setGlobalMode('goals')) }} >
              Objetivos
              <div className='count' >
                { goals.length }
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;