import React, { useContext } from 'react';
import './TodoList.css';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const {state, deleteTodoAction} = useContext(TodoContext);

  return (
    <div className='todo-list-container'>
      <div className='todo-item-container'>
        {state.length === 0 && <h2>The to-do list is empty</h2>}
        {state.map((todo) => {
            return (
                <div key={todo.id} className='todo-item-container'>
                    <h3>{todo.title}</h3>
                    <button onClick={() => deleteTodoAction(todo.id)}>Delete</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default TodoList
