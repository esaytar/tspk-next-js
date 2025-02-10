import Image from "next/image";

export default function DirectionEdCard({heading, text, url}) {
  return (
    <div className="flex flex-col rounded-[15px] p-10 text-18 bg-white/5 gap-5 shadow-newShad w-full">
        <div className="flex gap-2 items-center">
          <Image src={url} alt={heading + ' картинка'}/>
          <p className="text-mainBlue font-medium">{heading}</p>
        </div>
        <p className="leading-[21.09px]">{text}</p>
    </div>
  )
}
