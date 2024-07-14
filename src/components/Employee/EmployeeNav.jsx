import { NavLink } from "react-router-dom"
import DarkModeToggle from "../DarkMode/DarkModeToggle"


const EmployeeNav = () => {
  return (
    <aside className="employee-nav-wrapper | shadow flow bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
        <div className="employee-logo-dark-mode-toggle-wrapper | flex">
          <NavLink  className=" logo | text-550 font-tilt-prism uppercase font-semi-bold" to="/employee" >ars</NavLink>
          <DarkModeToggle/>
        </div>
        <nav className="employee-aside-nav">
            <ul className="employee-nav-list | flow uppercase text-400 font-bold ">
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/employee/account-details" >account details</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/employee/requests" >my requests</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/employee/assets">my assets</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/employee/all-assets" >all assets</NavLink></li>
            </ul>
        </nav>
    </aside>
  )
}

export default EmployeeNav