export const getTodos = () => {
  return dispatch => {
    dispatch({type: 'LOADING_TODOS'})
    return (
      fetch('/todos')
        .then(resp => resp.json())
        .then(todos => dispatch({type: 'LOADED_TODOS', payLoad: todos}))
    )
  }
}