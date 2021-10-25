import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/works.module.sass";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ModalWindow from "../ModalWindow";
import { FullScreenImage } from "../ui/FullScreenImage";
import { ModalFullScreenImage } from "../ModalFullScreenImage";

export function Work({ work }) {
  const [Slider, setSlider] = useState(false);
  const [ActiveIndex, setActiveIndex] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const router = useRouter();

  function setAciveSlide(index) {
    Slider.slideTo(index);
  }

  function openFullScreenImage(image) {
    setFullScreen(image);
  }
  function closeFullScreenImage() {
    setFullScreen(false);
  }

  if (fullScreen) {
    return (
      <ModalFullScreenImage functionClose={closeFullScreenImage}>
        <FullScreenImage image={fullScreen} />
      </ModalFullScreenImage>
    );
  }

  return (
    <div className="modal-content">
      <Head>
        <title>{work.title}</title>
      </Head>
      <div className={styles.workcardslider}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
          }}
          onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSlider(swiper)}
        >
          {work.images.map((image) => {
            if (image.includes("mobile")) {
              return (
                <SwiperSlide key={image + "full"}>
                  <div
                    // onClick={() => openFullScreenImage(image)}
                    className={styles.workfullimage}
                  >
                    <Image src={image} width={130} height={280} />
                  </div>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide key={image + "full"}>
                  <div
                    // onClick={() => openFullScreenImage(image)}
                    className={styles.workfullimage}
                  >
                    <Image key={image} src={image} width={630} height={290} />
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
      <div className={styles.workcardsliderthumbnails}>
        {work.images.map((image, index) => {
          if (image.includes("mobile")) {
            return (
              <div
                key={image + "thumb"}
                onClick={() => setAciveSlide(index)}
                className={
                  ActiveIndex == index
                    ? styles.workthumbnail + " " + styles.activeindex
                    : styles.workthumbnail
                }
              >
                <Image src={image} width={40} height={70} />
              </div>
            );
          } else {
            return (
              <div
                key={image + "thumb"}
                onClick={() => setAciveSlide(index)}
                className={
                  index == ActiveIndex
                    ? styles.workthumbnail + " " + styles.activeindex
                    : styles.workthumbnail
                }
              >
                <Image src={image} width={70} height={40} />
              </div>
            );
          }
        })}
      </div>

      <h1>{work.title}</h1>
      <div
        className="modal-description"
        dangerouslySetInnerHTML={work.description}
      ></div>
      <Link href="/brief">
        <button className="light-button">Заполнить бриф</button>
      </Link>
    </div>
  );
}
