import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'; // Import the CSS module

const Header = () => {
    return (
        <header className={styles.header}>

            <div className={styles.socialMedia}>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/linkedin.png" alt="LinkedIn" width={24} height={24} />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/github.png" alt="GitHub" width={24} height={24} />
                </a>
                <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/medium.png" alt="Medium" width={24} height={24} />
                </a>
            </div>


            <div className={styles.navigation}>
                <Link href="/contact" legacyBehavior><a className={styles.link}>Hire Me</a></Link>
                <Link href="/resume" legacyBehavior><a className={styles.link} download>Resume</a></Link>
            </div>
        </header>
    );
};

export default Header;
