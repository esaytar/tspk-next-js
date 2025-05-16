export default function UsualDataMode({title, children}) {
    return (
        <>
            <p className="bg-main-blue/5 text-main-blue rounded-[0.31rem] py-[0.31rem] px-2.5 mt-2">{title}</p>
            <p className="px-2.5 flex flex-col gap-4">
                {children}
            </p>
        </>
    )
}