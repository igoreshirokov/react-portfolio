import Head from 'next/head';
import { Nav } from '../components/header/Nav';

function MainLayout({ title, children }) {
    return (
        <div className="main">
            <Head>
                <title>{title}</title>
            </Head>
            <Nav />
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default MainLayout