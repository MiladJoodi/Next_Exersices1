import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";

import Swal from 'sweetalert2'

const CoursesItem = ({title, image, id, getCourses}) => {

  
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);

  const deletePost = async () => {
    const res = await fetch(`http://localhost:4000/posts/${id}`,{
      method: "DELETE",
    });

    if (res.status === 200) {
      setShowDeleteModal(false);
            Swal.fire({
            title: 'تبریک',
            title: 'دوره با موفقیت حذف شد',
            icon: 'success',
            confirmButtonText: 'باشه',
            width: '500px',
            })
            getCourses()
    }

  };

  const updatePost = async (e, title)=>{
e.preventDefault();
    const res = await fetch(`http://localhost:4000/posts/${id}`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title})
    })

    if (res.status === 200) {
      setShowEditModal(false);
      Swal.fire({
        title: 'دوره با موفقیت ویرایش شد',
        icon: 'success',
        confirmButtonText: 'باشه',
        width: '500px',
        })
        getCourses()
    }

  }



  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src={image}
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            {" "}
            ویرایش{" "}
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            {" "}
            حذف{" "}
          </a>
        </div>
      </li>
      {showEditModal && <EditModal updatePost={updatePost} hideEditModal={hideEditModal} />}
      {showDeleteModal && <DeleteModal deletePost={deletePost} hideDeleteModal={hideDeleteModal} />}
    </>
  );
};

export default CoursesItem;
