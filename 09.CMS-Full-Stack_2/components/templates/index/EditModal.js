import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import { useState } from "react";

const EditModal = ({ hideEditModal, updatePost }) => {


    const [title, setTitle] = useState("")


    const closeOnPressESC = window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            hideEditModal()
        }
      });

    return (
        <div className={styles.modal_container} id="edit-modal">
            <div className={styles.modal_bg} onClick={hideEditModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اطلاعات جدید را وارد کنید</h1>
                <form action="#" className={styles.edit_user_form}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag} /></span>
                        <input
                            type="text" 
                            placeholder="نام جدید دوره را وارد کنید"
                            spellcheck="false"
                            value={title}
                            onChange={e=> setTitle(e.target.value)}
                        />
                    </div>
                    {/* <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faCashRegister} /> </span>
                        <input
                            type="text" 
                            placeholder="قیمت دوره"
                            spellcheck="false"
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <input
                            type="text" 
                            placeholder="مدرس دوره"
                            spellcheck="false"
                        />
                    </div> */}

                    <button onClick={(e)=> updatePost(e, title)} type="submit" className={styles.update_btn }>
                        اپدیت دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditModal
