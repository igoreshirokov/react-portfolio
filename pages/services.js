import styles from '../styles/services.module.sass';
import MainLayout from "../layouts/MainLayout";



export default function Services() {
    return (
        <MainLayout title="Услуги">
            <div className={styles.services}>
                <div className="headline">
                    <h1>Услуги</h1>
                </div>
                <div className={styles.servicesList}>
                    <div className={`${styles.servicesListCard} ${styles.servicesListCardOdd}`}>
                        <h3>Разработка</h3>
                        <p>У вас есть дизайн? Отлично, верстка готового макета, программирование модулей, установка CMS и прочее.</p>
                        <button className="light-button">Подробнее</button>
                    </div>
                    <div className={styles.servicesListCard}>
                        <h3>Сбор данных</h3>
                        <p>Парсинг/скрапинг - обработка контента, например, каталог интернет-магазина, статьи болга, обработка и предоставление в удобном виде.</p>
                        <button className="light-button">Подробнее</button>
                    </div>
                    <div className={styles.servicesListCard}>
                        <h3>Дизайн</h3>
                        <p>Разрабатываю сайт под ключ, включая дизайн, верстку и установку на хостинг.</p>
                        <button className="light-button">Подробнее</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}