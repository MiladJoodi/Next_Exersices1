import React, { useState } from "react";

function Todo({ todo: { id, title, completed } }) {
  const [todo, setTodo] = useState({ id, title, completed });

  console.log(id, title, completed);

  const toggleCompleteHandler = async () => {
    const res = await fetch(`http://localhost:4000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo.title,
        completed: !todo.completed,
      }),
    });
    const data = await res.json();

    if (res.status === 200) {
      // setTodo((prevTodo) => ({ ...prevTodo, completed: !prevTodo.completed }));
      setTodo(data);
      console.log("Todo Completed Successfully :))");
    }
  };

  return (
    <li>
      <h2>
        {todo.id}. {todo.title}
      </h2>
      <p>Complete: {todo.completed ? "✅" : "❌"}</p>
      <button onClick={toggleCompleteHandler}>Toggle Completed</button>
      <hr />
    </li>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/todos/${params.id}`);
  const data = await res.json();

  return {
    props: {
      todo: data,
    },
  };
}

export default Todo;
