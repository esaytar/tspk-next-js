import EmployeeCard from "../../../components/infoPages/EmployeeCard";

export const metadata = {
  title: 'Руководство',
  description: "",
};

export default function page() {
    return (
        <div className="grid lg:grid-cols-4 gap-[1.43rem] lg:gap-10">
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
            <EmployeeCard/>
        </div>
    )
}
