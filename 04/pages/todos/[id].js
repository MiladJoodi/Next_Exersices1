import React from 'react'

function Todo({ id, title, completed }) {

  const toggleCompleteHandler = async ()=>{
    const res = await fetch(`http://localhost:4000/todos/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        title,
        completed : !completed
      })
    })


    if(res.status === 200){
      console.log('Todo compeleted successfully');
    }


  } 
  
  return (
    <li key={id}>
      <h2>{id} . {title}</h2>
      <p>Complete: {completed ? '✔️' : '❌'}</p>
      <button onClick={toggleCompleteHandler}>Toggle Completed</button>
      <hr />
    </li>
  )
}

export default Todo