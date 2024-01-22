import Course from "@/components/templates/index/Course";
import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const index = () => {
  return <Course />;
};

export async function getStaticProps(context) {
  connectToDB();
  const courses = await coursesModel.find({});

  console.log(courses);

  return {
    props: {},
  };
}

export default index;
