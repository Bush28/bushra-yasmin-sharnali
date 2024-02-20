import React from 'react';
import styles from './about.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h2 className={styles.sectionTitle}>Summary</h2>
            <p>A data-driven and customer-centric software professional with a solid foundation in Python, Flask, Django, JavaScript, React.js, and SQL. Holding a BS degree in Computer Science from North South University and a Full Stack Web Development Certificate from Flatiron School, my customer-first approach, coupled with strong team-building and leadership skills, positions me to create collaborative environments and drive successful outcomes. Skilled in both strategic and agile project management, I am deeply committed to continuous learning and innovation, which makes me a valuable asset for roles in the ever-evolving fast-paced software technology industry.</p>

            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.divContainer}>
            <p>Flatiron School, New York, New York</p>
            <p>Full Stack Web Development Certificate, Python with Flask and JavaScript program, 05/2023 - 10/2023</p>
            </div>
            <div className={styles.divContainer}>

            <p>North South University, Dhaka, Bangladesh</p>
            <p>BS [Bachelor of Science] in Computer Science and Engineering, 01/2016-04/2020</p>
            </div>

            <h2 className={styles.sectionTitle}>Experience</h2>
            <p>Panorama Washing Co. Ltd. , Gazipur City, Bangladesh</p>
            <p>Software Developer(Database Management System), April 2021 - Sept 2022</p>
            <ul>
                <li>Developed a tailored database management system utilizing MySQL for database management, Python and Flask for backend development and JavaScript for frontend interactions, optimizing internal operations.</li>
                <li>Engineered key functionalities including order tracking, customer database management, inventory monitoring, and employee scheduling, enhancing operational efficiency by 30%.</li>
                <li>Led the project from inception to completion, overseeing requirements gathering, system design, implementation and ongoing maintenance using tools such as Git for version control.</li>
                <li>Achieved substantial improvements in business processes, increased productivity by 25%, reduced errors by 20%, and improved customer service by 35%.</li>
            </ul>

            <p>NSU ACM Student Chapter, Dhaka, Bangladesh</p>
            <p>Sub-executive, Jan 2018 - Dec 2019</p>
            <ul>
                <li>Led a team of 35 members, enhancing team coordination and event execution.</li>
                <li>Organized and anchored coding competitions and tech talks, fostering a community of learning among peers.</li>
                <li>Coordinated daily project activities, streamlining cross-team collaboration and event planning.</li>
                <li>Managed relationships with TV and radio channels for media support, boosting event visibility.</li>
            </ul>

            <p>VNSC Science Club, Dhaka, Bangladesh</p>
            <p>In-charge, Jan 2014 - Sept 2015</p>
            <ul>
                <li>Oversaw the organization of club events, ensuring successful execution and member engagement.</li>
                <li>Translated requirements into high-level designs, improving the club's operational efficiency.</li>
            </ul>

            <p>North South University Social Services Club, Dhaka, Bangladesh</p>
            <p>Operations team member, Jan 2017 - Feb 2018</p>
            <ul>
                <li>Key contributor in planning and executing social service initiatives.</li>
                <li>Coordinated effectively with team and stakeholders using corporate communication skills.</li>
                <li>Organized events to boost community engagement and impact.</li>
                <li>Implemented strategies to enhance club operations' efficiency.</li>
            </ul>
        </div>
    );
}

export default About;
