import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import styles from "../styles/works.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import { Work } from "../components/works/Work";
import { LoaderGear } from "../components/ui/LoaderGear";

export default function Works() {
  const [modal, setModal] = useState(false);
  const [works, setWorks] = useState([]);
  function openModal(content) {
    setModal(content);
  }
  function closeModal() {
    setModal(false);
  }

  useEffect(async () => {
    const req = await fetch("/api/works");
    const res = await req.json();
    setWorks(res);
  }, []);

  return (
    <div>
      {modal ? (
        <ModalWindow functionClose={closeModal}>{modal}</ModalWindow>
      ) : (
        <MainLayout title="Работы">
          <div className={styles.works}>
            <div className="headline">
              <h1>Работы</h1>
            </div>
            <div className={styles.workslist}>
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                breakpoints={{
                  764: {
                    slidesPerView: 3,
                  },
                }}
                centeredSlides
                initialSlide={1}
                className="workslistslider"
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {!works.length ? (
                  <LoaderGear />
                ) : (
                  works.map((work, index) => {
                    return (
                      <SwiperSlide key={work.title + index + "key"}>
                        {({ isActive }) => (
                          <div
                            onClick={() => openModal(<Work work={work} />)}
                            className={
                              isActive
                                ? styles.workcard
                                : styles.workcard + " " + styles.notActive
                            }
                          >
                            <div className={styles.workcardheadline}>
                              {work.title}
                            </div>
                            <div className={styles.workcardimage}>
                              <Image
                                src={work.images[0]}
                                width={280}
                                height={280}
                                alt={work.title}
                              />
                            </div>
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })
                )}
                <div className={styles.workslistnavigation}>
                  <div className="swiper-button-prev">
                    <svg
                      width="30"
                      height="16"
                      viewBox="0 0 30 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.8398 8.91984L29.8398 6.91984L3.83984 6.91984L9.33985 1.41984L7.91985 -0.000158319L-0.00015571 7.91984L7.91984 15.8398L9.33984 14.4198L3.83984 8.91984L29.8398 8.91984Z"
                        fill="#808080"
                      />
                    </svg>
                  </div>
                  <div className="swiper-button-next">
                    <svg
                      width="30"
                      height="16"
                      viewBox="0 0 30 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6.92V8.92H26L20.5 14.42L21.92 15.84L29.84 7.92L21.92 0L20.5 1.42L26 6.92H0Z"
                        fill="#808080"
                      />
                    </svg>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </MainLayout>
      )}
    </div>
  );
}
