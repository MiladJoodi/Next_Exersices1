import Course from "@/components/templates/index/Course";
import connectToDB from "@/utils/db";

const index = () => {
  return <Course />;
};

export async function getStaticProps(context){

  connectToDB()


  return{
    props:{

    }
  }
}

export default index;
