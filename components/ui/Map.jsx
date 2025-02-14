'use client'

export default function Map({styles}) {
    return (
        <iframe loading="lazy" src="https://yandex.ru/map-widget/v1/?um=constructor%3A9fb0d3501650e576a61f1429e9f695a0fb7aea37d62d836574d2774a93cf2348&amp;source=constructor" width="400" height="262" className={`${styles}`}></iframe>
    )
}