import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: []
  },
  reducers: {
    addTask: (state, action) => {
      try {
        fetch('http://localhost:3001/tasks/addTasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'af973f61e9ade61a13287b32eaed5c52'
          },
          body: JSON.stringify(action.payload)
        }).then((response) => {
          if (!response.ok) {
            toast.error('Fail to addTask, ' + response.status + ' ' + response.statusText)
          }
          return response.json()
        }).then((response) => {
          if (response == null || response.status === 'ERROR') {
            toast.error(`Error: ${response.message}`)
          }
        })
      } catch (error) {
        console.error(error)
      }
    },
    removeTask: (state, action) => {
      try {
        fetch('http://localhost:3001/tasks/removeTasks/' + action.payload, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'af973f61e9ade61a13287b32eaed5c52'
          }
        }).then((response) => {
          if (!response.ok) {
            toast.error('Fail to removeTasks, ' + response.status + ' ' + response.statusText)
          }
          return response.json()
        }).then((response) => {
          if (response == null || response.status === 'ERROR') {
            toast.error(`Error: ${response.message}`)
          }
        })
      } catch (error) {
        console.error(error)
      }
    },
    setAllTasks: (state, action) => {
      state.value.splice(0, state.value.length)
      if (action.payload != null) {
        action.payload.forEach(element => {
          state.value.push(element)
        })
      }
    }
  }
})

export const { addTask, removeTask, setAllTasks } = tasksSlice.actions

export default tasksSlice.reducer
