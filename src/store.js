import { configureStore } from "@reduxjs/toolkit"
import goalReducer from "./reducers/goals"
import taskReducer from "./reducers/tasks"
import globalModeReducer from "./reducers/globalMode"

export default configureStore({
  reducer: {
    goals: goalReducer,
    tasks: taskReducer,
    globalMode: globalModeReducer
  }
})
