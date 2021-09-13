import Head from 'next/head';
import { Nav } from '../components/header/Nav';
import dynamic from 'next/dynamic';

const DynamicNav = dynamic(() => import('../components/header/Nav'));

function MainLayout({ title, children }) {
    return (
        <div className="main">
            <Head>
                <title>{title}</title>
            </Head>
            <DynamicNav />
            <section className="content">
                {children}
            </section>
            <section className="footer">
                <div className="footer-vline"></div>
            </section>
        </div>
    )
}

export default MainLayout