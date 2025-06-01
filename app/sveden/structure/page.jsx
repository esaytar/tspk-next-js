import { structureInfo } from '../../../content/collegeInfo';
import InfoString from '../../../components/infoPages/InfoString';


export const metadata = {
//   title: 'Структура и сведения об образовательной организации',
  description: "",
};

export default function Structure() {
    return (
        <div className='text-18 flex flex-col gap-[1.88rem]'>
            {structureInfo.map((item, index) => (
                <InfoString 
                    title={item.title}
                    key={index}
                >
                    {Array.isArray(item.content) ? (
                        item.content.map((contentItem, index) => 
                            <div key={index} className='px-2.5 flex flex-col gap-5'>{contentItem}</div>
                        )
                    ) : (
                        <div>{item.content}</div>
                    )}
                </InfoString>
            ))}
        </div>
    )
}