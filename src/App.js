import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import './App.css';

// class App extends Component () {
//   render () {
//     return (
//       <div className="App">
//         <h1>Welcome to Todo React App</h1>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    // const todoList = this.props.todos.map((todo, i) => <li key={i}>Descritption: {todo.description} | Completed: {todo.completed ? 'Done': 'Not Done'} </li>)
    return (
      <div className="App">
        <h1>Welcome to My React ToDo Project!</h1>
        <h3>My Current ToDo's</h3>
        <ul>
          {/* {this.props.loading ? <li>loading todos...</li> : todoList} */}
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
  return ({
    todos: state.todos
  })
}
export default connect(mapStateToProps)(App);
