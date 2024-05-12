import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './../styles/formulario.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addGoal } from '../reducers/goals'
import { addTask } from '../reducers/tasks'
import { useRef } from 'react'

function Formulario({ initFetch = () => {} }) {

  const globalMode = useSelector((state) => state.globalMode.value)
  const tasks = useSelector((state) => state.tasks.value)
  const goals = useSelector((state) => state.goals.value)

  const inputRefName = useRef()
  const inputRefDescription = useRef()
  const inputRefDueDate = useRef()

  const dispatch = useDispatch()

  const getNextId = (prepend, list) => {
    let nextId = prepend + '1'
    let maxId = 0
    if (list.length > 0) {
      list.forEach((field) => {
        let itemId = parseInt(field.id.replace(prepend, ''))
        maxId = maxId < itemId ? itemId : maxId
      })
      nextId = `${prepend}${(maxId + 1)}`
    }
    return nextId
  }

  const addItem = (e) => {
    e.preventDefault()
    if (globalMode === 'tasks') {
      let nextId = getNextId('task_', tasks)
      dispatch(addTask({
        id: nextId,
        type: 'task',
        name: inputRefName.current.value,
        description: inputRefDescription.current.value,
        due_date: inputRefDueDate.current.value
      }))
    }
    if (globalMode === 'goals') {
      let nextId = getNextId('goal_', goals)
      dispatch(addGoal({
        id: nextId,
        type: 'goal',
        name: inputRefName.current.value,
        description: inputRefDescription.current.value,
        due_date: inputRefDueDate.current.value
      }))
    }

    inputRefName.current.value = ""
    inputRefDescription.current.value = ""
    inputRefDueDate.current.value = ""

    setTimeout(() => {
      initFetch()
    }, 1000)
  }

  return (
    <Form onSubmit={(e) => { e.preventDefault() }} >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" ref={inputRefName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" placeholder="Descripción" rows={3} ref={inputRefDescription} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDueDate">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Control type="date" ref={inputRefDueDate} />
      </Form.Group>
      <div id='formActions' >
        <Button variant="primary" type="submit" onClick={addItem}>
          Agregar { globalMode === 'tasks' ? 'Tarea' : 'Objetivo' }
        </Button>
      </div>
    </Form>
  );
}

export default Formulario;