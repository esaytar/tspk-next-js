export default function InfoString({children, title}) {
    return (
        <div className='flex flex-col gap-5 text-18'>
            <div className='px-2.5 py-[0.31rem] bg-main-blue/10 rounded-[0.31rem] text-main-blue font-medium'>{title}</div>
            <div className='text-gray-main-text flex flex-col gap-4'>
                {children}
            </div>
        </div>
    ) 
}