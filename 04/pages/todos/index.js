import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Todos() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data=> setTodos(data))
    }, [])

    return (
        <div>
        <ul>
          {
            todos.length ? todos.map((todo) => (
                <li key={todo.id}>
                  <Link href={`/todos/${todo.id}`}>
                    <h3>{todo.title}</h3>
                  </Link>
                  <p>Complete: {todo.completed ? '✔️' : '❌'}
                    
                  </p>
                  <hr />
                </li>
              )) : <h1>Todos not found</h1>
          }
        </ul>
      </div>
    )
}

export default Todos