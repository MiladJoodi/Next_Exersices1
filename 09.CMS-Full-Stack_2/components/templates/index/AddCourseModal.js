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

    const addNewCourse = (event) => {
        event.preventDefault();

        // Not Empty Validation
        if (title === "") Swal.fire({
            // title: 'd!',
            title: 'لطفاً نام دوره را وارد نمایید',
            icon: 'error',
            confirmButtonText: 'باشه',
            width: '500px',
        })
        // Not Empty Validation

        // const res = await fetch('')
    
    }

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
