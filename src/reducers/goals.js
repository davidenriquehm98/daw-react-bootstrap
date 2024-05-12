import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    value: []
  },
  reducers: {
    addGoal: (state, action) => {
      try {
        fetch('http://localhost:3001/goals/addGoals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'af973f61e9ade61a13287b32eaed5c52'
          },
          body: JSON.stringify(action.payload)
        }).then((response) => {
          if (!response.ok) {
            toast.error('Fail to addGoals, ' + response.status + ' ' + response.statusText)
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
    removeGoal: (state, action) => {
      try {
        fetch('http://localhost:3001/goals/removeGoals/' + action.payload, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'af973f61e9ade61a13287b32eaed5c52'
          }
        }).then((response) => {
          if (!response.ok) {
            toast.error('Fail to removeGoals, ' + response.status + ' ' + response.statusText)
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
    setAllGoals: (state, action) => {
      state.value.splice(0, state.value.length)
      if (action.payload != null) {
        action.payload.forEach(element => {
          state.value.push(element)
        })
      }
    }
  }
})

export const { addGoal, removeGoal, setAllGoals } = goalsSlice.actions

export default goalsSlice.reducer
