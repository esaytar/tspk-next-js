import EmployeeCard from "../../../components/infoPages/EmployeeCard";

export const metadata = {
  title: 'Руководство',
  description: "",
};

export default function page() {
    return (
        <div className="grid grid-cols-4 gap-10">
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
