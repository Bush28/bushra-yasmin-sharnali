import Image from 'next/image';
import styles from './index.module.css'; // Import the CSS module

export default function Home() {
    // Skills and projects data from your resume
    const skills = [
        { name: 'JavaScript', level: '90%' },
        { name: 'React', level: '85%' },
        // ... add more skills
    ];

    const projects = [
        { name: 'Project 1', link: '/projects' },
        { name: 'Project 2', link: '/projects' },
        { name: 'Project 3', link: '/projects' },
    ];

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                {/* ... Add sidebar links ... */}
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                <Image
                    src="/assets/images/profile.jpg" // Path to your profile image
                    alt="Bushra Yasmin"
                    width={300} // Adjust the size as needed
                    height={300} // Adjust the size as needed
                    className={styles.profileImage}
                />

                {/* Typewriter Effect */}
                <h1 className={styles.typewriter}>Hello, I am Bushra Yasmin Sharnali, a developer</h1>

                {/* Skill bars */}
                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skill}>
                            <span className={styles.skillName}>{skill.name}</span>
                            <div className={styles.skillBar}>
                                <div className={styles.skillLevel} style={{ width: skill.level }}>
                                    {skill.level}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project list */}
                <div className={styles.projects}>
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} className={styles.project}>
                            {project.name}
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}
