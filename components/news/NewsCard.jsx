import useHandleNews from "../../store/useHandleNews";
import ArrowLong from "../ui/ArrowLong";

export default function NewsCard({text, date, img = []}) {
    const setIsOpened = useHandleNews((state) => state.setIsOpened)
    const setTextNews = useHandleNews((state) => state.setTextNews)
    const setDateNews = useHandleNews((state) => state.setDateNews)
    const setImageNews = useHandleNews((state) => state.setImageNews)
    const images = Array.isArray(img) ? img : [];
    const openModal = () => {
        setDateNews(date)
        setTextNews(text)
        setImageNews(img)
        setIsOpened(true)
    }
    
    return (
        <div className='flex flex-col gap-2.5 lg:gap-5 rounded-[1rem] shadow-main lg:shadow-none p-[1.07rem] lg:p-0'>
            {images[0] && (
                <img src={img[0]} alt="новость" className='rounded-[0.625rem] order-1 lg:order-none h-[14rem] object-cover' />)
            }
            <div className="flex flex-col gap-5 items-start">
                <div className="flex flex-col gap-2.5 max-w-full mb-2.5 lg:mb-0">
                    <p className='slider-item__text text-main-gray leading-[120%] lg:order-1'>{text}</p>
                    <p className='text-main-blue lg:order-0 self-end lg:self-start'>{date}</p>
                </div>
            </div>
            <button onClick={openModal}
                className="cursor-pointer border border-main-blue rounded-[1.07rem] uppercase text-base w-full py-3 px-6 order-2 self-center flex items-center justify-center text-main-blue
                lg:normal-case lg:p-0 lg:w-fit lg:border-0 lg:rounded-[1.88rem] lg:self-start ">
                Подробнее
                <ArrowLong style='fill-main-blue ml-2 hidden lg:block'/>
            </button>
        </div>
    )
}