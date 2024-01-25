import Course from "@/components/templates/index/Course";
import connectToDB from "@/utils/db";
import postsModel from '@/models/post'

const index = () => {
  return <Course />;
};

export async function getStaticProps(context){
  connectToDB();
  // const posts = await postsModel.find({})
  console.log(postsModel.find({}))

  return{
    props:{},
  }
}

export default index;
