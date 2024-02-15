import Image from 'next/image';
import styles from './contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1>Contact</h1>
            <div className={styles.contactInfo}>
                <p>BUSHRA YASMIN SHARNALI</p>
                <p>Deer Park, New York</p>
                <p>631-994-5677</p>
                <p>sharnaliyazmin@gmail.com</p>
            </div>
            <div className={styles.socialLinks}>
                <a className={styles.link} href="https://www.linkedin.com/in/bushra-yasmin-sharnali-200/" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/images/linkedin.png" alt="LinkedIn" width={30} height={30} />
                </a>
                <a className={styles.link} href="https://Github.com/Bush28" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/images/github.png" alt="GitHub" width={30} height={30} />
                </a>
                {/* <a className={styles.link} href="https://medium.com/@bushrayasminsharnali" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/images/medium.png" alt="Medium" width={30} height={30} />
                </a> */}
            </div>
        </div>
    );
}
