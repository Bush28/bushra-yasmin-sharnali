import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.navMenu}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/" legacyBehavior><a>Home</a></Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about" legacyBehavior ><a>About</a></Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/projects" legacyBehavior ><a>Projects</a></Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact" legacyBehavior ><a>Contact Me</a></Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
