import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from './actions' 
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    const todoList = this.props.todos.map((todo, i) => <li key={i}>Descritption: {todo.description} | Completed: {todo.completed ? 'Done': 'Not Done'} </li>)
    return (
      <div className="App">
        <h1>Welcome to My React ToDo Project!</h1>
        <h3>My Current ToDo's</h3>
        <ul>
          {/* {todoList} */}
          {this.props.loading ? <li>loading todos...</li> : todoList}
        </ul>
      </div>
    );
  }
}

// with combineReducers fn
// const mapStateToProps = (state) => {
//   return ({
//     todos: state.mainTodoReducer.todos
//   })
// }

const mapStateToProps = (state) => {
  // debugger
  return ({
    
    todos: state.todos,
    loading: state.loading
  })
}

export default connect(mapStateToProps, {getTodos})(App);
