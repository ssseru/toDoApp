import React from "react";
import ToDoItem from "./components/ToDoItem";
import "./styles.css";
import todosData from "./components/todosData";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render() {
    const data = this.state.todos.map((item) => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>);
    
    return (
      <div className="todolist">
        <h1 style={{ color: "cyan", textDecoration: "underline" }}>To Do List</h1>
        {data}
      </div>
    );
  }
}

export default App;
