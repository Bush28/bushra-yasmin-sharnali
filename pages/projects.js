import React from 'react';
import styles from './projects.module.css';

const projects = [
    { 
        name: 'Harmony', 
        description: 'Developed a web app for couples\' finance and chore management, using Django. Built a financial tracking system for personal and joint incomes for clear financial visibility. Used Django\'s ORM for efficient database management and scalability. Designed a user-friendly interface with React.js, easy for all users. Used ChatGPT API to add a financial advisor feature.', 
        link: 'https://github.com/your_username/harmony'
    },
    { 
        name: 'Stock Market Analyzer', 
        description: 'Developed a command line Stock Market Analyzer project using Python. Utilized Yfinance to collect historical stock market data. Performed data analysis and calculations with NumPy. Visualized the results with Matplotlib for data presentation.', 
        link: 'https://github.com/your_username/stock-market-analyzer'
    },
    { 
        name: 'Blockchain-based Messaging System', 
        description: 'Developing a Blockchain-based messaging system for secure and private communication. Implementing cryptographic techniques for message encryption and user authentication. Utilizing a decentralized network to ensure message integrity and prevent tampering. Incorporating smart contracts for automated message delivery and verification processes. Designing a user-friendly interface for ease of use in messaging and managing contacts.', 
        link: 'https://github.com/your_username/blockchain-messaging-system'
    }
];

const Project = () => {
    return (
        <div className={styles.projectContainer}>
            {projects.map((project, index) => (
                <div key={index} className={styles.project}>
                    <h2 className={styles.projectName}>{project.name}</h2>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    );
}

export default Project;
