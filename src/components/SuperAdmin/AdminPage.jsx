import  { Outlet} from "react-router-dom"
import AdminNav from "./AdminNav"

const AdminPage = () => {
  return (
    <div className="admin-pg-wrapper | flex dark:bg-neutral-900 bg-neutral-400">
      <AdminNav/>
      <Outlet/>
    </div>
  )
}

export default AdminPage