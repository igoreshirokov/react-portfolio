import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import styles from "../styles/home.module.sass";
import ContactsIcons from "../components/header/ContactIcons";

const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
        <div className={styles.centered}>
          <div className={styles.image}>
            <Image src="/images/i.png" layout="fill" />
          </div>
          <h1>Игорь Татарченко</h1>
          <span>веб-разработчик</span>
          <div className={styles.contactIcons}>
            <ContactsIcons />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
