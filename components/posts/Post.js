import Head from "next/head";
import Link from "next/link";


export function Post({post}) {
    return (
        <div className="modal-content">
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1>{post.title}</h1>
            <div className="modal-description" dangerouslySetInnerHTML={post.description}></div>
        </div>
    )
}