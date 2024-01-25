import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Course = ({posts}) => {

  const [data, setData] = useState(posts)

  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const hideAddCourseModal = () => setShowAddCourseModal(false);

  const getCourses = async ()=>{
    const res = await fetch('http://localhost:4000/posts')
    const postsData = await res.json()
    console.log(postsData)

    // if(res.status === 200){
      setData(postsData)
    // }

  }
  // getCourses()


  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
        </div>
        <ul className={styles.courses_list}>

          {data.map((post)=>(
            <CoursesItem getCourses={getCourses} image="/images/courses/PWA.jpg" {...post} />
          ))}

        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal hideAddCourseModal={hideAddCourseModal} />
      )}
    </>
  );
};

export default Course;
