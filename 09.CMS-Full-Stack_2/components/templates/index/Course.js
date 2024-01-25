import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import { useState } from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";

const Course = (posts) => {

  const [data, setData] = useState(Object.entries({...posts})) // convert object to array

  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const hideAddCourseModal = () => setShowAddCourseModal(false);

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
            <CoursesItem {...post} />
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
