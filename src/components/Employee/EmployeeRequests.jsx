import EmployeeRequestsTableRowData from "./EmployeeRequestsTableRowData"
import api from "../../API/BaseURL"

import { useState ,useReducer, useEffect } from "react"



const employeeRequestsReducer = (state,action) =>{
  switch(action.type){
    case"search":
        return {...state,search:action.payload}
    case"requests":
      return {...state,request:action.payload}
  }
}


const EmployeeRequests = () => {
const [state,dispatch] = useReducer(employeeRequestsReducer,{
                                                            search:"",
                                                            requests:[]
})
const [displayedRequests,setDisplayedRequests] = useState([])
const [token, setToken] = useState("")
const localStoredAccount = localStorage.getItem('arsUseraccount') ? true : false
  useEffect(() =>{

  const getUserRequests = async () =>{

    if(localStoredAccount){
      setToken(localStorage.getItem('token'))    }
    try{
      const resp = await api.get("requests/user/",{
        headers: {
        'Authorization':`Token ${token}`
        }
      })
      console.log(resp)
    }
    catch(err){      
      throw new Error ("Error fetching user requests",err)
    }
  }
  getUserRequests()

  },[])
  // console.log(localStorage.getItem('token'))
  return (
    <div className="employee-requests-table-wrapper | shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
    <div className="employee-requests-header-wrapper">
        <header className="employee-requests-header | flex dark:text-neutral-200">
          <div className="employee-total-requests-and-requests-search-wrapper | flex">
            <div className="employee-total-requests-filtered-requests-wrapper | flex ">
              <p><span className="uppercase font-bold">total requests</span>: <span
                  className="font-semibold">{state.requests.length}</span></p>
              <p><span className="uppercase font-bold ">filtered requests</span>: <span
                  className="font-semibold">{displayedRequests.length}</span></p>
            </div>
            <div className="employee-requests-search-bar-wrapper">
              <input onChange={e => dispatch({type:"search",payload:e.target.value})}type="text" className="employee-requests-search-bar" placeholder="Search by name or type" />
            </div>
          </div>
          <div className="employee-requests-filter-btns  | flex">
            {/* {state.category.map((name)=>{
            return (<button onClick={()=>{handleCategorySelection(name)}} 
                    className={`capitalize btn  ${selectedCategories.includes(name)?"filter-primary-btn":"ghost-btn"}`}  key={name}>{name}
                    </button>)})} */}
          </div>
        </header>
      </div>      
      <table className="employee-requests-table ">
        <caption className="table-caption | font-bold text-600 uppercase ">my requests</caption>
        <thead>
          <tr className="table-headings | text-neutral-100 uppercase font-semibold ">
            <th className="table-heading">name</th>
            <th className="table-heading">category</th>
            <th className="table-heading">type</th>
            <th className="table-heading">serial</th>
            <th className="table-heading">status</th>
            <th className="table-heading"></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

    </div>
  )
}

export default EmployeeRequests