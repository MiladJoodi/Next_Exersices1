import { useState } from "react";
import styles from "@/styles/Course.module.css";

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

        </ul>
      </section>
    </>
  );
};

export default Course;
