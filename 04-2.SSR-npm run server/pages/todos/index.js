import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Todo from "./[id]"

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
                <Todo key={todo.id} {...todo} />
              )) : <h1>Todos not found</h1>
          }
        </ul>
      </div>
    )
}

export default Todos