import { useRouter } from "next/router";
import React from "react";

function User({ user }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Fallback page: Please wait</h1>;
  }

  return <h1>User Name: {user.name}</h1>;
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.slice(0, 3).map((user) => {
    return {
      params: { id: String(user.id) },
    };
  });

  return {
    paths,
    // fallback: true, // true, false, "blocking"
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const userID = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );

  if (res.status !== 200) {
    return {
      // notFound: true,
      redirect: {destination: '/'}
    };
  }

  const data = await res.json();

  return {
    props: {
      user: data,
    },
    revalidate: 10
  };
}

export default User;
