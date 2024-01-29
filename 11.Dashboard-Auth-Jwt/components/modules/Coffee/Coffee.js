import React from 'react'
import styles from "@/styles/Coffee.module.css";

function Coffee() {
    return (
            <div className={styles.loader}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className={styles.cup}><span></span></div>
        </div>
    )
}

export default Coffee