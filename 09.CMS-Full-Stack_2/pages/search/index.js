import Course from "@/components/templates/index/Course";

const index = (posts) => {
  // console.log(posts)
  return <Course {...posts} />;
};

export async function getServerSideProps(context){
  const res = await fetch('http://localhost:4000/posts')
  const data = await res.json()
  
  const {query} = context;
  console.log(query)
  
  const posts = await data.find({title: {$regex: query.q}});
  




  return{
    props:{
    //   posts: JSON.parse(JSON.stringify(posts))
    },
  }
}

export default index;
