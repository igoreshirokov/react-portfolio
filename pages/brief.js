import ModalWindow from "../components/ModalWindow";
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/brief.module.sass';



export default function Brief() {
    const router = useRouter();
    function closeBrief() {
        router.push('/');
    }

    return (
        <ModalWindow functionClose={closeBrief}>
            <Head>
                <title>Бриф на разработку сайта</title>
            </Head>
            <div className="brief">
                <h1 className="brief-title">БРИФ НА РАЗРАБОТКУ САЙТА</h1>
                <p>Данный опросный лист поможет более четко понять цели и задачи интернет-проекта.</p>
                <form className={styles.briefForm}>
                    <div className={styles.briefFormContactInfo}>
                        <h3>Контактая информация</h3>
                        <label htmlFor="name">Клиент</label>
                        <input id="name" type="text"></input>
                        <label htmlFor="phone">Телефон</label>
                        <input id="phone" type="text"></input>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="text"></input>
                        <label htmlFor="site">Сайт</label>
                        <input id="site" type="text"></input>
                    </div>
                    <div className={styles.companyinfo}>
                        <h3>1. ИНФОРМАЦИЯ О КОМПАНИИ</h3>
                        <label htmlFor="fullnamecompany">1.1. Полное название организации</label>
                        <textarea id="fullnamecompany" type="text"></textarea>
                        <label htmlFor="companyproducts">1.2. Описание основных продуктов/услуг</label>
                        <textarea id="companyproducts" type="text"></textarea>
                    </div>
                    <div className={styles.competitors}>
                        <h3>2. КОНКУРЕНТЫ</h3>
                        <label htmlFor="competitors">2.1. Прямые конкуренты <br /> <span className={styles.smalltext}>Необходимо указать прямых конкурентов в Вашем ценновом сегменте. По возможности охарактеризуйте их сильные и слабые стороны. Укажите адреса сайтов.</span></label>
                        <textarea id="competitors" type="text"></textarea>
                    </div>
                    <div className={styles.customer}>
                        <h3>3. ЦЕЛЕВАЯ АУДИТОРИЯ</h3>
                        <label htmlFor="customer">3.1. Покупатель продукта/услуги<br /> <span className={styles.smalltext}>Кто принимает решение о покупке продукта или услуги? Его социально-демографические характеристики (пол, возраст, доход, образование, стиль жизни)</span></label>
                        <textarea id="customer" type="text"></textarea>
                    </div>
                    <div className={styles.accent}>
                        <h3>4. ИНФОРМАЦИЯ О ИНТЕРНЕТ-ПРОЕКТЕ</h3>
                        <label htmlFor="accent1">4.1. Что привело Вас к решению создать новый сайт (изменить существующий)?</label>
                        <textarea id="accent1" type="text"></textarea>
                        <label htmlFor="accent2">4.2. Какие основные задачи стоят перед разработчиком сайта?</label>
                        <textarea id="accent2" type="text"></textarea>
                        <label htmlFor="accent3">4.3. Напишите предварительную структуру сайта: основные разделы, подразделы. Кратко опишите их функциональное назначение и дайте характеристику содержания каждого из разделов.</label>
                        <textarea id="accent3" type="text"></textarea>
                        <label htmlFor="accent4">4.4. Какие материалы у Вас у есть?<span className={styles.smalltext}>Логотип, знак, фирменный цвет, фирменный шрифт, фотографии, материалы, используемые при разработке другой рекламной продукции и т. д.?</span></label>
                        <textarea id="accent4" type="text"></textarea>
                        <label htmlFor="accent5">4.5. Желаемые сроки разработки сайта</label>
                        <textarea id="accent5" type="text"></textarea>
                        <label htmlFor="accent6">4.6. Бюджет проекта (возможны ориентировочные рамки от и до)</label>
                        <textarea id="accent6" type="text"></textarea>
                    </div>
                    <div className={styles.requirement}>
                        <h3>5. ОСНОВНЫЕ ТРЕБОВАНИЯ И ПОЖЕЛАНИЯ К ДИЗАЙНУ</h3>
                        <label htmlFor="requirement1">5.1. Требования к дизайну <span className={styles.smalltext}>Напишите требования к дизайну, которые обязательны для исполнения. Пожелания к дизайну сайта.</span></label>
                        <textarea id="requirement1" type="text"></textarea>
                        <label htmlFor="requirement2">5.2. Близкие к желаемому результату по стилю сайты других компаний? <span className={styles.smalltext}>Напишите адреса нескольких сайтов, которые Вам нравятся. Что именно Вам нравится в этих сайтах (стильный дизайн, удобная навигация и т. п.)?</span></label>
                        <textarea id="requirement2" type="text"></textarea>
                    </div>

                    <div className={styles.another}>
                        <h3>6. ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h3>
                        <label htmlFor="another">6.1. Любая полезная в работе над проектом информация</label>
                        <textarea id="another" type="text"></textarea>
                    </div>

                    <button className="light-button">Отправить</button>
                </form>
            </div>
        </ModalWindow>
    )
}