import MainLayout from "../layouts/MainLayout";
import Image from 'next/image';
import styles from '../styles/home.module.sass';
import ContactsIcons from "../components/header/ContactIcons";


const Home = () => {
  return (
    <MainLayout>
      <div className="home">
        <div className={styles.centered}>
          <Image src="/images/i.png" width={300} height={300} />
          <h1>Игорь Татарченко</h1>
          <span>веб-разработчик</span>
          <ContactsIcons />
        </div>
      </div>
    </MainLayout>
  )
}

export default Home;