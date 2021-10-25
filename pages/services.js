import styles from "../styles/services.module.sass";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import {
  Development,
  Design,
  Scrapping,
} from "../components/services/ServicesDescriptions";
import { Service } from "../components/services/Service";
import { LoaderGear } from "../components/ui/LoaderGear";

export default function Services() {
  const [modal, setModal] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(async () => {
    const req = await fetch("/api/services");
    const res = await req.json();
    setServices(res);
  }, []);
  
  function openModal(content) {
      setModal(content);
    }
    function closeModal() {
        setModal(false);
    }

  return (
    <div>
      {modal ? (
        <ModalWindow functionClose={closeModal}>{modal}</ModalWindow>
      ) : (
        <MainLayout title="Услуги">
          <div className={styles.services}>
            <div className="headline">
              <h1>Услуги</h1>
            </div>
            <div className={styles.servicesList}>
              {services.length < 0 ? <LoaderGear /> : services.map((service, index) => (
                <div
                  className={`${styles.servicesListCard}`}
                >
                  <h3>{service.title}</h3>
                  <p>{service.excerpt}</p>
                  <button
                    className="light-button"
                    onClick={() => openModal(<Service service={service} />)}
                  >
                    Подробнее
                  </button>
                </div>
              ))}
            </div>
          </div>
        </MainLayout>
      )}
    </div>
  );
}
