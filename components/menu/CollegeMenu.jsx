import Applicants from './collegeMenu/Applicants'
import Students from './collegeMenu/Students'
import Teachers from './collegeMenu/Teachers'

export default function CollegeMenu({ulID, index, main, gap, color}) {
    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} ${gap ? gap : ''} ${main}`}>
            <li>
                <Applicants color={color} styles={main}/> 
            </li>
            <li>
                <Students color={color} styles={main}/> 
            </li>
            <li>
                <Teachers color={color} styles={main}/> 
            </li>
        </ul>
    )
}
