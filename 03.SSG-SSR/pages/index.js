export default function Home({ title, body }) {
  return (
    <>
      <h1>{title}</h1>
      <h3>{body}</h3>
    </>
  );
}

export async function getStaticProps() {
  // Codes
  console.log(`getStaticProps Running`);

  return {
    props: {
      title: "تایتل تستی",
      body: "به دوره نکست سبزلرن خوش اومدید",
    },
  };
}
