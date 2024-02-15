import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'; 


const Header = () => {
    return (
        <header className={styles.header}>
            

            <div className={styles.socialMedia}>
            <h4> </h4>

            </div>


            <div className={styles.navigation}>
            <a className={styles.link} href="https://www.linkedin.com/in/bushra-yasmin-sharnali-200/" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
                </a>
                <a className={styles.link} href="https://Github.com/Bush28" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/images/github.png" alt="GitHub" width={24} height={24} />
                </a>
                <a className={styles.link} href="https://medium.com/@bushrayasminsharnali" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/images/medium.png" alt="Medium" width={24} height={24} />
                </a>
                <Link href="/contact" legacyBehavior><a className={styles.link}>Hire Me</a></Link>
                <Link href="/resume" legacyBehavior><a className={styles.link} download>Resume</a></Link>

            </div>
        </header>
    );
};

export default Header;
