import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Authentications components Routes 
import Login from './components/Auth/Login.jsx'
import SignUp from './components/Auth/SignUp.jsx'
// All users shared components Routes
import ErrorPage from './components/SharedComponents/ErrorPage.jsx' 
import LogoIndexPage from './components/SharedComponents/LogoIndexPage.jsx'
import UserAccountDetails from './components/SharedComponents/UserAccountDetails.jsx'
// Admin SuperAdmin Shared Components Routes
import AddAssets from './components/SharedComponents/AddAsset.jsx'
import Requests from './components/SharedComponents/Requests.jsx'
import AdminAllAssets from './components/Admin/AdminAllAssets.jsx'
// SuperAdmin components Routes
import SuperAdminPage from './components/SuperAdmin/SuperAdminPage.jsx'   
import SuperAdminAllAssets from './components/SuperAdmin/SuperAdminAllAssets.jsx'
import Accounts from './components/SuperAdmin/Accounts.jsx'
// Admin components Routes
import AdminPage from './components/Admin/AdminPage'

// Employee components Routes
import EmployeePage from './components/Employee/EmployeePage.jsx'
import EmployeeAllAssets from './components/Employee/EmployeeAllAssets.jsx'
import EmployeeMyAssets from './components/Employee/EmployeeMyAssets.jsx'
import EmployeeRequests from './components/Employee/EmployeeRequests.jsx'


import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* a)Auth
        b)Admin & SuperAdmin shared pages*/}
        <Route path="/" element={<Login/>}/>
        {/* Auth */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>

        {/* Super Admin */}
        <Route path="/super-admin" element={<SuperAdminPage/>}>
          <Route index element={<LogoIndexPage/>}/>
          {/* Admin & SuperAdmin shared pages */}
          <Route path="my-account-details" element = {<UserAccountDetails/>}/>
          <Route path="requests" element={<Requests/>}/>
          <Route path="add-asset" element={<AddAssets/>}/>
          <Route path="all-assets" element={<SuperAdminAllAssets/>}/>          
          <Route path="accounts" element={<Accounts/>}/>
        </Route>
        {/* Admin */}
        <Route path="/admin" element={<AdminPage/>}>
          <Route index element={<LogoIndexPage/>}/>
          <Route path="my-account-details" element = {<UserAccountDetails/>}/>         
          <Route path="requests" element={<Requests/>}/>
          <Route path="add-asset" element={<AddAssets/>}/>
          <Route path="all-assets" element={<AdminAllAssets/>}/>
        </Route>
        {/* Employee */}
        <Route path="/employee" element={<EmployeePage/>}>
          <Route index element={<LogoIndexPage/>}/>
          <Route path="my-account-details" element = {<UserAccountDetails/>}/>          
          <Route path="assets" element={<EmployeeMyAssets/>}/>
          <Route path="requests" element={<EmployeeRequests/>}/>
          <Route path="all-assets" element={<EmployeeAllAssets/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
