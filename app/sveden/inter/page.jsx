import { intersInfo } from '../../../content/collegeInfo';
import InfoString from '@/components/infoPages/InfoString';

export const metadata = {
  title: 'Международное сотрудничество',
  description: "",
};

export default function InterCoopPage() {
    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            {intersInfo.map((item, index) => (
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
