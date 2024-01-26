import Course from "@/components/templates/index/Course";

const index = (posts) => {
  // console.log(posts)
  return <Course {...posts} />;
};

export async function getServerSideProps(context){
  const res = await fetch('http://localhost:4000/posts')
  const data = await res.json()
  
  const {query} = context;
  const {q} = query
//   console.log(query)
  
//   const filteredData = await data.find({title: {$regex: query.q}});
const newData = await data.filter(function(post){
    return post.title === q
  })
  console.log(newData)

  return{
    props:{
      posts: JSON.parse(JSON.stringify(newData)),
    },
  }
}

export default index;
