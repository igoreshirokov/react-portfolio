import MainLayout from "../layouts/MainLayout";
import styles from "../styles/resume.module.sass";
import Link from "next/link";
import Image from "next/image";
import ContactsIcons from "../components/header/ContactIcons";
export default function Resume() {
  return (
    <MainLayout title="Резюме - Татарченко Игорь">
      <div className="headline">
        <h1>Резюме</h1>
      </div>
      <div className={styles.resume}>
        <div className={styles.avatar}>
          <Image width={110} height={110} src="/images/i.png" />
          <ContactsIcons />
        </div>
        <div className={styles.info}>
          <div className={styles.info_string}>
            <span>Фамилия:</span>
            <p>Татарченко</p>
          </div>
          <div className={styles.info_string}>
            <span>Имя:</span>
            <p>Игорь</p>
          </div>
          <div className={styles.info_string}>
            <span>Отчество:</span>
            <p>Всеволодович</p>
          </div>
          <div className={styles.info_string}>
            <span>Возраст:</span>
            <p>29 лет</p>
          </div>
          <div className={`${styles.info_string} ${styles.info_string_about}`}>
            <span>О себе:</span>
            <p>
              Опыт веб-разработки более 7 лет. Разрабатываю сайты и
              веб-приложения под ключ. <br />
              Программирую на языках Javascript, PHP. Настраиваю и подключаю
              библиотеки к рабочим проектам. <br /> Кроме веб-разработки
              интересуюсь мобильных приложений.
            </p>
          </div>
          <div className={`${styles.info_string} ${styles.info_string_skills_string}`}>
            <span>Навыки:</span>
            <p>
            <div className={styles.info_string_skills}>
              <i className={styles.skill}>React.js</i>
              <i className={styles.skill}>Angular</i>
              <i className={styles.skill}>Next.js</i>
              <i className={styles.skill}>Laravel</i>
              <i className={styles.skill}>Nest.js</i>
              <i className={styles.skill}>Figma</i>
              <i className={styles.skill}>TypeScript</i>
              <i className={styles.skill}>Prisma.js</i>
              <i className={styles.skill}>Wordpress</i>
              <i className={styles.skill}>Docker</i>
              <i className={styles.skill}>Github</i>
              <i className={styles.skill}>Nginx</i>
              <i className={styles.skill}>Apache</i>
              <i className={styles.skill}>SQL</i>
            </div>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Link href="/brief">
          <button className="light-button">Оставить заявку</button>
        </Link>
          <button className={styles.print}>Печать</button>
      </div>
    </MainLayout>
  );
}
