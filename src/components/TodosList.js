import React from "react"
import TodoItem from "./TodoItem"

const TodosList = props => {
  const display = {display: "none"};
  
  return (
    <ul className="todo-list">
      {props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
      <button className="all-clear" style={(props.todos.length === 0)?display:null} onClick={props.deleteCompleted}>Clear all completed</button>
    </ul>
  )
}
export default TodosList