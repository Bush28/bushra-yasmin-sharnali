import Image from 'next/image';
import styles from './index.module.css';
import Sidebar from '../components/Sidebar';
import { useEffect } from 'react';

export default function Home() {
    const skills = [
        { name: 'Python Django', level: '90%' },
        { name: 'JavaScript', level: '90%' },
        { name: 'Flask', level: '90%' },
        { name: 'React.js', level: '90%' },
        { name: 'Next.js', level: '90%' },
        { name: 'Git', level: '90%' },
        { name: 'C', level: '60%' },
        { name: 'Java', level: '60%' },
    ];

    const projects = [
        { name: 'Project 1', link: '/projects' },
        { name: 'Project 2', link: '/projects' },
        { name: 'Project 3', link: '/projects' },
    ];

    // Typewriter effect for name
    // const [name, setName] = useState('');
    // const fullName = 'BUSHRA YASMIN SHARNALI';
    // useEffect(() => {
    //     let i = 0;
    //     const interval = setInterval(() => {
    //         if (i < fullName.length) {
    //             setName((prev) => prev + fullName[i]);
    //             i++;
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 150);
    //     return () => clearInterval(interval);
    // }, []);

    // Skill bar animation
    useEffect(() => {
        skills.forEach(skill => {
            const skillLevelElement = document.querySelector(`.${styles.skillLevel}[data-skill="${skill.name}"]`);
            if (skillLevelElement) {
                requestAnimationFrame(() => {
                    skillLevelElement.style.width = skill.level;
                });
            }
        });
    }, [skills]);



    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.mainContent}>
                <div className={styles.profileAndDetails}>
                    <div className={styles.details}>
                    <h1 className={styles.typewriter}>Bushra Yasmin Sharnali</h1>

                        <p>Deer Park, New York | 631-994-5677 | sharnaliyazmin@gmail.com</p>
                        <div className={styles.textbox}>
                            <div className={styles.skills}>
                                {skills.map((skill, index) => (
                                    <div key={index} className={styles.skill}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <div className={styles.skillBar}>
                                            <div
                                                className={styles.skillLevel}
                                                data-skill={skill.name} // Match this in useEffect
                                                style={{ width: '0%' }} // Start width at 0%
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.projects}>
                                {projects.map((project, index) => (
                                    <a key={index} href={project.link} className={styles.project}>
                                        {project.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.profilePicContainer}>
                        <Image
                            src="/assets/images/profile.jpg"
                            alt="Bushra Yasmin"
                            width={310} // Adjust based on your preference
                            height={700} // Adjust based on your preference
                            className={styles.profileImage}
                            priority // Addressing the LCP warning
                        />
                    </div>
                    
                </div>
            </main>
        </div>
    );
}
