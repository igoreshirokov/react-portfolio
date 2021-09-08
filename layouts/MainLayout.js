import Head from 'next/head';

function MainLayout({ title, children }) {
    return (
        <div className="main">
            <Head>
                <title>{title}</title>
            </Head>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default MainLayout