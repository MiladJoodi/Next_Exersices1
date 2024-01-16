import Link from "next/link";
import React, { useEffect, useState } from "react";
import Todo from "./[id]";
import useSWR from "swr";

const todosFetcher = () =>
  fetch("http://localhost:4000/todos").then((res) => res.json());

function Todos() {
  const { data, error } = useSWR("todos", todosFetcher);

  if (error) {
    return <h1>UnKnown Error !!</h1>;
  }

  return (
    <div>
      <ul>
        {data?.length
          ? data.map((todo) => (
              <li key={todo.id}>
                <Link href={`/todos/${todo.id}`}>
                  {todo.id}- {todo.title}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Todos;
