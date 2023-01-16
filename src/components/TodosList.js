import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(item=>
        <TodoItem key={item.id} todo={item}
        handleChangeProps={this.props.handleChangeProps}
        deleteTodoProps={this.props.deleteTodoProps}
        setUpdate={this.props.setUpdate}
        />)}
      </ul>
    )
  }
}

export default TodosList