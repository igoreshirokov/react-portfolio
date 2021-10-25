import Head from "next/head";
import Link from "next/link";


export function Service({service}) {
    return (
        <div className="modal-content">
            <Head>
                <title>{service.title}</title>
            </Head>
            <h1>{service.title}</h1>
            <div className="modal-description" dangerouslySetInnerHTML={service.description}></div>
            <Link href="/brief"><button className="light-button">Заполнить бриф</button></Link>
        </div>
    )
}