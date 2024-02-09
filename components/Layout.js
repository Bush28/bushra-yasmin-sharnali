import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar'; 
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <Sidebar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
