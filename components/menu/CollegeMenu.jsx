import Applicants from './collegeMenu/Applicants'
import Students from './collegeMenu/Students'
import Teachers from './collegeMenu/Teachers'

export default function CollegeMenu({ulID, index, main, gap, color}) {
    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} flex-col text-[0.875rem] gap-5 ${main}`}>
            <li><Applicants color={color} styles="flex-col gap-[0.71rem]"/> </li>
            <li><Students color={color} styles="flex-col gap-[0.71rem]"/> </li>
            <li><Teachers color={color} styles="flex-col gap-[0.71rem]"/> </li>
        </ul>
    )
}
