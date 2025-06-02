import { provInfo } from '@/content/bpooInfo';
import InfoString from '@/components/infoPages/InfoString';

export const metadata = {
    title: 'Материально-техническое обеспечение обучающихся с ограниченными возможностями здоровья и инвалидностью | БПОО',
    description: "",
}
export default function ProvisionPage() {
    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            {provInfo.map((item, index) => (
                <InfoString 
                    title={item.title}
                    key={index}
                >
                    {Array.isArray(item.content) ? (
                        item.content.map((contentItem, index) => 
                            <div key={index} className='px-2.5 flex flex-col gap-5' >{contentItem}</div>
                        )
                    ) : (
                        <div>{item.content}</div>
                    )}
                </InfoString>
            ))}
    </div>
    )
}