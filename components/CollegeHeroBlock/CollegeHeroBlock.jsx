import styles from './CollegeHeroBlock.module.css'

export default function CollegeHeroBlock({heading, desc, vertical, nameStyle}) {

    return (
        <div style={{ backgroundImage: `url(${nameStyle.src})` }} className={`w-full bg-no-repeat bg-cover min-h-fit object-cover flex flex-col lg:flex-row justify-center lg:justify-between p-[1.43rem] lg:p-10 items-center rounded-[10px]`}>
            <div className='flex flex-col gap-5 text-white'>
                <h1 className='font-medium text-[2.6rem] lg:text-[3rem]'>{heading}</h1>
                <p className='lg:text-18 text-[1.14rem] leading-[1.32rem] lg:w-1/2'>{desc}</p>
            </div>
            <p className={styles.verticalText}>{vertical}</p>
        </div>
    )
}
