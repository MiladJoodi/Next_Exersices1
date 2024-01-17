import React, { useState } from 'react'

function Todo({ id, title, completed }) {

  const [todo, setTodo] = useState({id, title, completed})

  const toggleCompleteHandler = async ()=>{
    const res = await fetch(`http://localhost:4000/todos/${todo.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        title: todo.title,
        completed : !todo.completed
      })
    })


    if(res.status === 200){
      setTodo(prevTodo=> ({...prevTodo, completed: !prevTodo.completed}))
      console.log('Todo compeleted successfully');
    }


  } 
  
  return (
    <li key={id}>
      <h2>{todo.id} . {todo.title}</h2>
      <p>Complete: {todo.completed ? '✔️' : '❌'}</p>
      <button onClick={toggleCompleteHandler}>Toggle Completed</button>
      <hr />
    </li>
  )
}

export default Todo