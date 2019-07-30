export default (state={todos: [{"description": "Client-ex 1",
"completed": true}, {"description": "Client-ex 2",
"completed": false}], loading: false}, action) => {
  switch (action.type) {
    case 'LOADING_TODOS':
      return {
        ...state,
        loading: true
      }
      case 'LOADED_TODOS':
        // debugger
          return {
            ...state,
            loading: false,
            todos: action.payLoad
          }

    default:
      return state
  }
}