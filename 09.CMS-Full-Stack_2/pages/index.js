import Course from "@/components/templates/index/Course";

const index = (posts) => {
  // console.log(posts)
  return <Course {...posts} />;
};

export async function getStaticProps(context){
  const res = await fetch('http://localhost:4000/posts')
  const data = await res.json()
  console.log(data)


  return{
    props:{
      posts: data,
    },
  }
}

export default index;
