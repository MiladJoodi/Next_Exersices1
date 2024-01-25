import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faHome, faLock, faTag
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar_logo}>
                <img src="/images/logo/logo.webp" alt="" />
                <h3>خوش آمدید</h3>
            </div>
            <ul className={styles.sidebar_links}>
                <li>
                    <a href="#" className={styles.active || styles.sidebar_link}>
                        {/* add active to enable link */}
                        <span>
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                        صفحه اصلی
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.sidebar_links}>
                        <span>
                            <FontAwesomeIcon icon={faTag} />
                        </span>
                        تماس با ما
                    </a>
                </li>
                <li>
                    <a href="#" className={styles.sidebar_links}>
                        <span>
                            <FontAwesomeIcon icon={faBookmark} />
                        </span>
                        درباره ما
                    </a>
                </li>
            </ul>
            <div className={styles.sidebar_logout}>
                <a href="#" className={styles.logout}>
                    <span>
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    خروج
                </a>
            </div>
        </aside>
    )
}

export default Sidebar
