import { standartsInfo } from '../../../content/collegeInfo';
import InfoString from '@/components/infoPages/InfoString';

export const metadata = {
  title: 'Образовательные стандарты и требования',
  description: "",
};
export default function StandartsPage() {
    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            {standartsInfo.map((item, index) => (
                <InfoString 
                    title={item.title}
                    key={index}>
                    {Array.isArray(item.content) ? (
                        item.content.map((contentItem, index) => 
                            <div key={index} className='px-2.5 flex flex-col gap-5' >{contentItem}</div>
                        )
                    ) : (
                        <div key={index} className='px-2.5'>{item.content}</div>
                    )}
                </InfoString>
            ))}
        </div>
    )
}
