import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faFile, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";

import Swal from 'sweetalert2'

const AddCourseModal = ({ hideAddCourseModal }) => {

    const [title, setTitle] = useState("")

    const addNewCourse = async (event) => {
        event.preventDefault();

        // Not Empty Validation
        if (title === "") Swal.fire({
            // title: 'd!',
            title: 'لطفاً نام دوره را وارد نمایید',
            icon: 'error',
            confirmButtonText: 'باشه',
            width: '500px',
        })
        else{
            const res = await fetch('http://localhost:4000/posts',{
            method: 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({title})
        })
        if(res.status === 201){
            Swal.fire({
            title: 'تبریک',
            title: 'دوره با موفقیت اضافه شد',
            icon: 'success',
            confirmButtonText: 'باشه',
            width: '500px',
            })
        }
        hideAddCourseModal(false)
        }
        
        
    
    }

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hideAddCourseModal()
        }
      });

    return (
        <div className={styles.modal_container} id="add-new-course-modal">
            <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
                <form action="#" className={styles.edit_user_form} onSubmit={addNewCourse}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag} /></span>
                        <input
                            type="text"
                            placeholder="نام دوره"
                            spellcheck="false"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>

                    <button type="submit" className={styles.update_btn}>
                        اپدیت دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCourseModal
