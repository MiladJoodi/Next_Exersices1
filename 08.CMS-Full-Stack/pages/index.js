import Course from "@/components/templates/index/Course";
import connectToDB from "@/utils/db";
import coursesModel from '@/models/course'


const index = () => {
  return <Course />;
};

export async function getStaticProps(context){

  connectToDB()
  await coursesModel.find()
  console.log(coursesModel)

  return{
    props:{

    }
  }
}

export default index;
