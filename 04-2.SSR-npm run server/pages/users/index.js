import Link from "next/link";
import React from "react";

function Users({ users }) {
  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`}>
            {user.id}. {user.name}
          </Link>
        </h2>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log("getStaticProps => ISR");

  return {
    props: {
      users: data,
    },
    revalidate: 10, // 10Second
  };
}

// 1. Only run server
// 2. Security
// 3. Run Node.js Code
// 4. only on pages folder
// 5. return object (props property)
// 6. ?

// ISR => Incremental Static reGeneration

export default Users;
