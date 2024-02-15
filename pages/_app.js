
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../src/app/global.css'


function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Import Bootstrap JS only on the client-side
        const bootstrap = async () => {
            await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        };
        bootstrap();
    }, []);

    return (
        <>
            <Header />
            <main>
            <Sidebar />
            <Component {...pageProps} />
            </main>
            <Footer />

        </>
    );
}

export default MyApp;
