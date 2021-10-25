import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/blog.module.sass";


export function Post({post}) {
    return (
        <div className="modal-content">
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1>{post.title}</h1>
            <div className={styles.created_ad}>{post.created_ad}</div>
            <div className="modal-description" dangerouslySetInnerHTML={post.description}></div>
        </div>
    )
}