import React, { useContext, useState } from 'react'
import './AddTodo.css';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const {state, addTodoAction} = useContext(TodoContext);
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '') {
        alert('Your title is empty');
    } else {
        addTodoAction(title)
    }
    setTitle('');
  }
  console.log(state);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleTitleChange} />
        <button type='submit'>Add Todo</button>
      </form>
    </>
  )
}

export default AddTodo
