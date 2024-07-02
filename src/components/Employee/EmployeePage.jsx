import { Outlet } from "react-router-dom"
import EmployeeNav from "./EmployeeNav"

const EmployeePage = () => {
  return (
    <div className="employee-pg | flex dark:bg-neutral-900 bg-neutral-400">
      <EmployeeNav/>
      <div className="container">
      <Outlet/>
      </div>
    </div>
  )
}

export default EmployeePage