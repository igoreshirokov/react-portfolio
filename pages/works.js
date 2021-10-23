import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import ModalWindow from '../components/ModalWindow';
import styles from '../styles/works.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import Image from 'next/image';
import { Redautorent } from "../components/works/MyWorks";

export default function Works() {
    const [modal, setModal] = useState(false)

    function openModal(content) {
        setModal(content)
    }
    function closeModal() {
        setModal(false)
    }

    useEffect(() => {
        openModal(Redautorent)
    }, [])



    return (
        <div>

            {modal ? (
                <ModalWindow functionClose={closeModal}>
                    {modal}
                </ModalWindow>
            ) : (
                <MainLayout title="Работы">
                    <div className={styles.works}>
                        <div className="headline">
                            <h1>Работы</h1>
                        </div>
                        <div className={styles.workslist}>
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={3}
                                centeredSlides
                                initialSlide={1}
                                className="workslistslider"
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                            >
                                <SwiperSlide>
                                    <div onClick={() => openModal(Redautorent)} className={styles.workcard}>
                                        <div className={styles.workcardheadline}>redautorent.ee</div>
                                        <div className={styles.workcardimage}>
                                            <Image src="/images/works/mssh/mssh-8.jpg" width={280} height={280} alt={'Ателье Маруси Широковой'}  />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.workcard}>
                                        <div className={styles.workcardheadline}>redautorent.ee</div>
                                        <div className={styles.workcardimage}>
                                            <Image src="/images/works/oldportfolio/oldportfolio-5.jpg" width={280} height={280} alt={'Ателье Маруси Широковой'} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.workcard}>
                                        <div className={styles.workcardheadline}>redautorent.ee</div>
                                        <div className={styles.workcardimage}>
                                            <Image src="/images/works/vkshop/vkshop-mobile.jpg" width={280} height={280} alt={'Ателье Маруси Широковой'} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.workcard}>
                                        <div className={styles.workcardheadline}>redautorent.ee</div>
                                        <div className={styles.workcardimage}>
                                            <Image src="/images/works/mssh/mssh-0.jpg" width={280} height={280} alt={'Ателье Маруси Широковой'} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.workcard}>
                                        <div className={styles.workcardheadline}>redautorent.ee</div>
                                        <div className={styles.workcardimage}>
                                            <Image src="/images/works/mssh/mssh-0.jpg" width={280} height={280} alt={'Ателье Маруси Широковой'} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className={styles.workslistnavigation}>
                                    <div className="swiper-button-prev">
                                        <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.8398 8.91984L29.8398 6.91984L3.83984 6.91984L9.33985 1.41984L7.91985 -0.000158319L-0.00015571 7.91984L7.91984 15.8398L9.33984 14.4198L3.83984 8.91984L29.8398 8.91984Z" fill="#808080" />
                                        </svg>
                                    </div>
                                    <div className="swiper-button-next">
                                        <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 6.92V8.92H26L20.5 14.42L21.92 15.84L29.84 7.92L21.92 0L20.5 1.42L26 6.92H0Z" fill="#808080" />
                                        </svg>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </MainLayout>
            )}
        </div>
    )
}