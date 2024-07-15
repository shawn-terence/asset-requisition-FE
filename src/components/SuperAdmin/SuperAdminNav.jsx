import { NavLink } from "react-router-dom"
import DarkModeToggle from "../DarkMode/DarkModeToggle"

const SuperAdminNav = () => {
return (
    <aside className="super-admin-nav-wrapper | shadow flow bg-neutral-100 dark:bg-neutral-600 dark:text-neutral-200">
        <div className="super-admin-logo-dark-mode-toggle-wrapper | flex">
            <NavLink  className=" logo | text-550 font-tilt-prism uppercase font-semi-bold" to="/super-admin" >ars</NavLink>
            <DarkModeToggle/>
        </div>
        <nav className="super-admin-aside-nav">
            <ul className="super-admin-nav-list | flow uppercase text-400 font-bold ">
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/super-admin/my-account-details" >account details</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/super-admin/requests" >requests</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/super-admin/add-asset">Add assets</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/super-admin/all-assets">all assets</NavLink></li>
                <li className="aside-nav-link-wrapper"><NavLink className="aside-nav-link" to="/super-admin/accounts">accounts</NavLink></li>
            </ul>
        </nav>
    </aside>
  )
}

export default SuperAdminNav