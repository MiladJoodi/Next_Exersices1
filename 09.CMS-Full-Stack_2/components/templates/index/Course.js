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

    if(res.status === 200){
      setData(postsData)
    }

  }

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

          {data ? data.reverse().map((post)=>(
            <CoursesItem getCourses={getCourses} image="/images/courses/PWA.jpg" {...post} key={post.id} />
          )) :
          <div>
            <h1>هیج موردی یافت نشد</h1>
          </div>
          }

        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal getCourses={getCourses} hideAddCourseModal={hideAddCourseModal} />
      )}
    </>
  );
};

export default Course;
