
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

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
            <Component {...pageProps} />
            </main>
            <Footer />

        </>
    );
}

export default MyApp;
