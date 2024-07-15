import { Outlet } from "react-router-dom"
import SuperAdminNav from "./SuperAdminNav"

const SuperAdminPage = () => {
  return (
    <div className="super-admin-pg | text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:bg-neutral-900 bg-neutral-400 flex">
      <SuperAdminNav/>
      <Outlet/>
    </div>
  )
}

export default SuperAdminPage