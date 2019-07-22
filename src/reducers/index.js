import { combineReducers } from 'redex'
import mainTodoReducer from './todoReducer'
import mainUserReducer from './userReducer'

export default combineReducers({
  mainTodoReducer
  // mainTodoReducer: todoReducer
  mainUserReducer
})