import Link from "next/link"
import Head from "next/head"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../../styles/works.module.sass'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export function fullScreenImageView(image, close) {
    return (
        <div className="full-screen-image-wrapper">

            <div onClick={close} className="button-close"></div>

            <div className="full-screen-image">
                <img src={image} alt="Полное изображение" />
            </div>
        </div>
    )
}


export function Redautorent() {
    const fullScreen = {
        on: false,
        image: false
    }
    const images = [
        '/images/works/redautorent/desktop1.jpg',
        '/images/works/redautorent/desktop2.jpg',
        '/images/works/redautorent/desktop3.jpg',
        '/images/works/redautorent/desktop4.jpg',
        '/images/works/redautorent/mobile1.jpg',
        '/images/works/redautorent/mobile2.jpg',
        '/images/works/redautorent/mobile3.jpg',
        '/images/works/redautorent/mobile4.jpg',
        '/images/works/redautorent/mobile5.jpg',
    ]

    function openFullScreenImage(image) {
        fullScreen.on = true
        fullScreen.image = image
        console.log("clice")
    }
    
    function closeFunction() {
        fullScreen.on = false
        fullScreen.image = false
    }

    return (
        <div className="modal-content">
            <Head>
                <title>redautorent.ee - разработка с готовым дизайном</title>
            </Head>
            <div className={styles.workcardslider}>
                {/* {fullView && <fullScreenImageView image={fullView} close={closeFunction} />} */}
                {fullScreen && <fullScreenImageView image={fullScreen.image} close={closeFunction} />}
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 5000
                    }}
                >

                    {images.map(image => {
                        if (image.includes("mobile")) {
                            return (
                                <SwiperSlide>
                                    <div onClick={() => openFullScreenImage(image)} className={styles.workfullimage}>
                                        <Image key={image} src={image} width={130} height={280} />
                                    </div>
                                </SwiperSlide>
                            )
                        } else {

                            return (
                                <SwiperSlide>
                                    <div onClick={() => openFullScreenImage(image)} className={styles.workfullimage}>
                                        <Image key={image} src={image} width={630} height={290} />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    })}
                </Swiper>
            </div>
            <div className={styles.workcardsliderthumbnails}>

            </div>

            <h1>redautorent.ee - разработка с готовым дизайном</h1>
            <div className="modal-description">
                <p>На рынке IT услуг существуют 2 ветки предложения - биржи и студии. В студиях стоимость выполнения работ заоблочно высока, а на фриланс биржах ваш проект может оказаться выполненным кое-как или вообще не выполненным.
                    Предлагаю свой опыт в помощь вам. Вы расскажете о вашей задаче, а я придумаю как ее решить, каких специалистов нанять и на какой расчитывать бюджет.
                    Так же, я могу целиком погрузиться в вашу задачу и выполнять функции менеджера, предоставляя вам подробнейший отчет о проделанной работе и затратах.</p>
                <p>Консультация платная. Стоимость 1 часа консультации - $15.
                    Услуги менеджера проекта - $4/час. </p>
            </div>
            <Link href="/brief"><button className="light-button">Заполнить бриф</button></Link>
        </div >
    )
}


export function Scrapping() {
    return (
        <div className="modal-content">
            <h1>Сбор данных</h1>
            <div className="modal-description">
                <p>На рынке IT услуг существуют 2 ветки предложения - биржи и студии. В студиях стоимость выполнения работ заоблочно высока, а на фриланс биржах ваш проект может оказаться выполненным кое-как или вообще не выполненным.
                    Предлагаю свой опыт в помощь вам. Вы расскажете о вашей задаче, а я придумаю как ее решить, каких специалистов нанять и на какой расчитывать бюджет.
                    Так же, я могу целиком погрузиться в вашу задачу и выполнять функции менеджера, предоставляя вам подробнейший отчет о проделанной работе и затратах.</p>
                <p>Консультация платная. Стоимость 1 часа консультации - $15.
                    Услуги менеджера проекта - $4/час. </p>
            </div>
            <Link href="/brief"><button className="light-button">Заполнить бриф</button></Link>
        </div>
    )
}


export function Design() {
    return (
        <div className="modal-content">
            <h1>Дизайн</h1>
            <div className="modal-description">
                <p>На рынке IT услуг существуют 2 ветки предложения - биржи и студии. В студиях стоимость выполнения работ заоблочно высока, а на фриланс биржах ваш проект может оказаться выполненным кое-как или вообще не выполненным.
                    Предлагаю свой опыт в помощь вам. Вы расскажете о вашей задаче, а я придумаю как ее решить, каких специалистов нанять и на какой расчитывать бюджет.
                    Так же, я могу целиком погрузиться в вашу задачу и выполнять функции менеджера, предоставляя вам подробнейший отчет о проделанной работе и затратах.</p>
                <p>Консультация платная. Стоимость 1 часа консультации - $15.
                    Услуги менеджера проекта - $4/час. </p>
            </div>
            <Link href="/brief"><button className="light-button">Заполнить бриф</button></Link>
        </div>
    )
}