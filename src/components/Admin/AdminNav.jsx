import { NavLink } from "react-router-dom"
import DarkModeToggle from "../DarkMode/DarkModeToggle"


const AdminNav = () => {
  return (
    <aside className="admin-nav-wrapper | shadow flow bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
        <div className="admin-logo-dark-mode-toggle-wrapper | flex">
            <NavLink  className=" logo | text-550 font-tilt-prism uppercase font-semi-bold" to="/admin" >ars</NavLink>
            <DarkModeToggle/>
        </div>
        <nav className="admin-aside-nav">
            <ul className="admin-nav-list | flow uppercase text-400 font-bold ">
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/admin/my-account-details" >account details</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/admin/requests" >requests</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/admin/add-asset">Add assets</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/admin/all-assets">all assets</NavLink></li>
            </ul>
        </nav>
    </aside>
  )
}

export default AdminNav