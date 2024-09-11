import Applicants from './collegeMenu/Applicants'
import Students from './collegeMenu/Students'
import Teachers from './collegeMenu/Teachers'

export default function CollegeMenu({ulID, index, main, gap}) {
    return (
        <ul className={`${ulID === index ? 'flex' : 'hidden'} ${gap ? gap : ''} ${main}`}>
            <li>
                <Applicants styles={main}/> 
            </li>
            <li>
                <Students styles={main}/> 
            </li>
            <li>
                <Teachers styles={main}/> 
            </li>
        </ul>
    )
}
