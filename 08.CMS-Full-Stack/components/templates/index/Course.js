import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Course = ({courses}) => {

  const [data, setData] = useState([...courses])

  const [showAddCourseModal, setShowAddCourseModal] = useState(false);  
  const hideAddCourseModal = () => setShowAddCourseModal(false);

  const getCourses = async ()=>{
    const res = await fetch(`api/courses`)
    const coursesData = await res.json()

    if(res.status === 200){
      setData(coursesData)
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

          {
            data.map((course)=> (
              <CoursesItem {...course} />
            ))
          }

        </ul>
      </section>

      {showAddCourseModal && (
        <AddCourseModal hideAddCourseModal={hideAddCourseModal} />
      )}
    </>
  );
};

export default Course;
