import { createSlice } from "@reduxjs/toolkit"

export const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    value: []
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload)
    },
    removeGoal: (state, action) => {
      state.value.splice(action.payload, 1)
    }
  }
})

export const { addGoal, removeGoal } = goalsSlice.actions

export default goalsSlice.reducer
