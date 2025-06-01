'use client'
import {useEffect, useRef, useState} from 'react'
import NewsCard from './NewsCard'
import { register } from 'swiper/element/bundle'
import alternative from '@/img/alternative.jpg'
import axios from 'axios'
import ArrowSmall from '../ui/ArrowSmall'
import dynamic from 'next/dynamic'
const NewsModal = dynamic(() => import('./NewsModal'))

register();

export default function NewsBlock() {
    const [news, setNews] = useState(null)

    function checkRepost(item) {
        if (item.copy_history) {
            return [item.copy_history[0].text, getImgUrl(item.copy_history[0].attachments)]
        } 
        return [null, null]
    }

    function getImgUrl(attachments = 'unknown') {
        if (attachments === null || attachments.photo === null) return null
        const imagesArray = []
        if (attachments === 'unknown') {
            imagesArray.push(alternative.src)
            return imagesArray
        }
        
        attachments.map((item) => {
            switch(item.type) {
                case 'photo':
                    imagesArray.push(item.photo.orig_photo.url)
                    break
                case 'video':
                    imagesArray.push(findMaxSizes(item.video.first_frame, item.type))
                    break
                case 'doc':
                    if (item.ext != "png" || item.ext != "jpg" || item.ext != "gif") return
                    imagesArray.push(findMaxSizes(item.doc.preview.photo.sizes, item.type))
                    break
                case 'album':
                    imagesArray.push(item.album.thumb.orig_photo.url)
                    break
                default:
                    return findMaxSizes()
            }
        })
        return imagesArray
    }

    function findMaxSizes(array, type) {
        if (!array) return alternative.src
        let url = ''
        array.map(item => {
            if (480 <= item.width <= 630) {
                url = type === 'doc' ? item.src : item.url
            } 
        })
        return url
    }

     useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/vk-news')
                const items = response.data?.response?.items || []
                const newsItems = items.map((item, index) => {
                    let cutNumber = 4;
                    const findNullImage = () => {
                        if (item.attachments?.length > 0) {
                            cutNumber = item.attachments.length % 2 === 0 || item.attachments.length === 1 
                                ? item.attachments.length : item.attachments.length - 1

                            return item.attachments
                        } 
                        return null
                    }
                    const urlArray = getImgUrl(findNullImage()) || []
                    cutNumber = Math.min(cutNumber, 4)
                    const [repostText, urlRepost] = checkRepost(item) || [null, []]
                    return (
                        <swiper-slide key={`${item.id}_${index}`}>
                            <NewsCard
                                text={repostText || item.text || ''}
                                date={convertToNormalDate(item.date) || ''}
                                link={`https://vk.com/tspk63?w=wall${item.owner_id}_${item.id}`}
                                img={urlArray.length ? urlArray : (urlRepost || [])}
                            />
                        </swiper-slide>
                    )
                })
                setNews(newsItems.length ? newsItems : <p>Новости не найдены</p>)
            } catch (err) {
                console.log(err.message)
                setNews(
                    <p className='text-[1.5rem] text-center text-gray-main-text w-full'>
                        Новости на данный момент недоступны
                    </p>
                )
            }
        }
        
        fetchData();
  }, []);

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
                .swiper-pagination-bullet-active {background: #1763F4 !important;}\
                .swiper-button-prev, .swiper-button-next {}
            `]
        }
        Object.assign(swiperContainer, params)
        swiperContainer.initialize()
    }, [])

    return (
        <div className='flex flex-col lg:gap-10 gap-[1.43rem] w-full relative'> 
            <NewsModal/>
            <div className='flex justify-between w-full items-center'>
                <p className='text-main-gray text-[1.29rem] lg:text-[1.81rem] font-medium'>Новости</p>
                <div className='flex gap-2'>
                    <button className='disabled:opacity-50 cursor-pointer custom-prev size-[2.19rem] p-3 text-center border-2 border-main-blue flex justify-center items-center'><ArrowSmall style='stroke-main-blue min-w-max stroke-2 rotate-90'/></button>
                    <button className='disabled:opacity-50 cursor-pointer custom-next size-[2.19rem] p-3 text-center border-2 border-main-blue flex justify-center items-center'><ArrowSmall style='stroke-main-blue min-w-max stroke-2 -rotate-90'/></button>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[3.125rem]'> 
                <div className='lg:overflow-hidden w-full'>
                    <swiper-container
                        init="false"
                        grab-cursor="true"
                        ref={swiperRef}
                        slides-per-view="1"
                        navigation-prev-el=".custom-prev"
                        navigation-next-el=".custom-next"
                        space-between="10"
                        >
                            {news}
                    </swiper-container>
                </div>
            </div>
        </div>
    )
}