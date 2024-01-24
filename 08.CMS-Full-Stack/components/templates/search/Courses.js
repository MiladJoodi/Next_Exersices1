import { useState } from "react";
import styles from "@/styles/Course.module.css";
import CoursesItem from "@/components/modules/coursesItem/CoursesItem";

const Course = ({courses}) => {

  const [data, setData] = useState([...courses])

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>نتیجه جستجو</h2>
        </div>
        <ul className={styles.courses_list}>

          {/* {
            data.map((course)=> (
              <CoursesItem {...course} />
            ))
          } */}
          <CoursesItem title="" />

        </ul>
      </section>
    </>
  );
};

export default Course;
