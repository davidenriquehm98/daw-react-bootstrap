import { createSlice } from "@reduxjs/toolkit"

export const globalModeSlice = createSlice({
  name: 'globalMode',
  initialState: {
    value: 'tasks'
  },
  reducers: {
    setGlobalMode: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setGlobalMode } = globalModeSlice.actions

export default globalModeSlice.reducer
