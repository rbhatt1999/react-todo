import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(item=><TodoItem key={item.id} todo={item}/>)}
      </ul>
    )
  }
}

export default TodosList