import { criteriInfo } from '@/content/teachersInfo';
import InfoString from '@/components/infoPages/InfoString';

export const metadata = {
  title: "Критерии назначения стимулирующих выплат",
  description: "",
};
export default function CriteriaPage() {
    return (
        <div className='text-18 flex flex-col gap-[1.45rem]'>
            {criteriInfo.map((item, index) => (
                <InfoString 
                    title={item.title}
                    key={index}>
                    {Array.isArray(item.content) ? (
                        item.content.map((contentItem, index) => 
                            <div key={index} className='px-2.5 flex flex-col gap-5' >{contentItem}</div>
                        )
                    ) : (
                        <div className='px-2.5'>{item.content}</div>
                    )}
                </InfoString>
            ))}
        </div>
    )
}
