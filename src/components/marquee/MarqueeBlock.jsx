import LinkedImage from '../LinkedImage'
import edinoeOkno from '@/img/marquee_images/edinoe_okno.jpg'
import minProsv from '@/img/marquee_images/min_prosv.jpg'
import navigator from '@/img/marquee_images/navgator.jpg'
import explanation from '@/img/marquee_images/obiyesnieem.jpg'
import educat from '@/img/marquee_images/obrazovanie.jpg'
import communic from '@/img/marquee_images/razgovori.jpg'
import znanium from '@/img/marquee_images/znanium.jpg'
import styles from './marquee.module.css'

export default function MarqueeBlock() {
    const images = [
        {
            link: 'https://znanium.ru/',
            img: znanium,
            alt: 'znanium'
        },
        {
            link: 'https://minobrnauki.gov.ru/',
            img: educat,
            alt: 'Министерство науки и высшего образования РФ'
        },
        {
            link: 'https://razgovor.edsoo.ru/',
            img: communic,
            alt: 'Разговоры о важном'
        },
        {
            link: 'https://xn--90aivcdt6dxbc.xn--p1ai/',
            img: explanation,
            alt: 'Объясняем.рф'
        },
        {
            link: 'https://navigator.asurso.ru/additional-education',
            img: navigator,
            alt: 'Навигатор'
        },
        {
            link: 'http://window.edu.ru/',
            img: edinoeOkno,
            alt: 'Единое окно доступа к образовательным ресурсам'
        },
        {
            link: 'https://edu.gov.ru/',
            img: minProsv,
            alt: 'Минпросвещения России'
        },
    ]

    return (
        <div className={`${styles.contScroll} cont-scroll whitespace-nowrap m-auto`}>
            <div className={`${styles.scroll} inline-block w-max`}>
                {
                    images.map((image, index) => (
                        <LinkedImage key={index} link={image.link} alt={image.alt} image={image.img}/>
                    ))
                }
            </div>
            <div className={`${styles.scroll} inline-block w-max`}>
                {
                    images.map((image, index) => (
                        <LinkedImage key={index} link={image.link} alt={image.alt} image={image.img}/>
                    ))
                }
            </div>
        </div>
    )
}
