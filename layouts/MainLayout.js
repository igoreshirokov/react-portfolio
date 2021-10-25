import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicNav = dynamic(() => import("../components/header/Nav"), {
  ssr: false,
});

function MainLayout({ title, children }) {
  return (
    <div className="main">
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <DynamicNav />
      <section className="content">{children}</section>
      <section className="footer">
        <div className="footer-vline"></div>
      </section>
    </div>
  );
}

export default MainLayout;
