'use client'

import {useEffect, useRef, useState} from 'react'
import NewsCard from './NewsCard'
import { register } from 'swiper/element/bundle'
// import alternative from '../../assets/alternative.jpg'
import axios from 'axios'

register();

export default function NewsBlock() {
    const [news, setNews] = useState(null)

    function checkRepost(item) {
        if (item.copy_history) {
            return [item.copy_history[0].text, getImgUrl(item.copy_history[0].attachments[0])]
        } 
        return [null, null];
    }

    function getImgUrl(attachment) {
        if (attachment === null) return null
        switch(attachment.type) {
            case 'photo':
                return findMaxSizes(attachment.photo.sizes, attachment.type)
            case 'video':
                return findMaxSizes(attachment.video.image, attachment.type)
            case 'doc':
                return findMaxSizes(attachment.doc.preview.photo.sizes, attachment.type)
            case 'album':
                return findMaxSizes(attachment.album.thumb.sizes, attachment.type)
            default:
                return alternative
        }
    }

    function findMaxSizes(array, type) {
        let url = ''
        array.map(item => {
            if (480 <= item.width <= 630) {
                url = type === 'doc' ? item.src : item.url
            } 
        })
        if (url === '') return alternative
        return url
    }

    useEffect(() => {
        async function fetchData() {
            await axios.get('https://esaytar.github.io/tspk/data.json')
            .then(res => {
                const newsItems = res.data.response.items.map((item, index) => {
                    const url = getImgUrl(item.attachments.length ? item.attachments[0] : null)
                    const [repostText, urlRepost] = checkRepost(item)
                    return (<swiper-slide key={index}>
                        <NewsCard
                            text={repostText !== null ? repostText : item.text}
                            date={convertToNormalDate(item.date)}
                            link={`https://vk.com/tspk63?w=wall${item.owner_id}_${item.id}`}
                            img={url === null ? urlRepost : url}
                        /> 
                    </swiper-slide>
                )})
                setNews(newsItems)
            }).catch(err => {
                setNews(<p className='text-[1.5rem] text-center text-grayMainText w-full'>Новости на данный момент недоступны</p>)
                console.error('There was a problem with your fetch operation:', err);
            })
        }
        fetchData();
    }, [])

    const convertToNormalDate = (num) => {
        const date = new Date(num * 1000)
        const readableDate = date.toLocaleString('ru-RU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
        return readableDate
    }

    const swiperRef = useRef(null)
    useEffect(() => {
        const swiperContainer = swiperRef.current
        const params = {
            breakpoints: {
                580: {
                    slidesPerView: 2,
                },
                940: {
                    slidesPerView: 3,
                }
            },
            injectStyles: [`
                .swiper {display: flex !important; flex-direction: column; gap: 2rem; overflow: visible !important;}
                @media (min-width: 1024px) {.swiper {gap: 50px;}}
                .swiper-pagination {position: relative !important; bottom: 0; top: 0; cursor: inherit !important; display: flex; gap: 10px; align-items: center; justify-content: center;}
                .swiper-pagination-bullet {width: 10px; height: 10px; margin: 0 !important; background: rgba(23, 99, 244, 0.8) !important;}
                .swiper-pagination-bullet-active {background: #1763F4 !important;}
            `]
        }
        Object.assign(swiperContainer, params)
        swiperContainer.initialize()
    }, [])

    return (
        <div className='flex flex-col lg:gap-10 gap-[1.43rem] w-full'> 
            <p className='text-grayText text-[1.29rem] lg:text-[1.81rem] font-semibold'>Новости</p>
            <div className='flex flex-col items-center gap-[3.125rem]'> 
                <div className='lg:overflow-hidden w-full'>
                    <swiper-container
                        init="false"
                        grab-cursor="true"
                        ref={swiperRef}
                        slides-per-view="1"
                        pagination="true"
                        space-between="10"
                        >
                            {news}
                    </swiper-container>
                </div>
            </div>
        </div>
    )
}