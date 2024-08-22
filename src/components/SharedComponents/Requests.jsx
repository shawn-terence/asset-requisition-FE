import { useState,useReducer, useEffect} from "react"


import RequestsTableDataRow from "./RequestsTableDataRow"
import api from "../../API/BaseURL"

const requestsReducer = (state,action) =>{
  switch(action.type){
    case'search':
      return {...state,search:action.payload}
    case'requests':
      return {...state,requests:action.payload}
    case'filterBtns':
    return {...state,filterBtns:action.payload}
    default:
      throw new Error("action type is undefined")
  }
}

const getRequestAssetTypes = (requests) =>{
  const types = []
  for(const request of requests){
    if(!(types.includes(request.asset.asset_type))){
      types.push(request.asset.asset_type)
    }
  }  
  return types  

}

const Requests = () => {
  const [state,dispatch] = useReducer(requestsReducer,{                                                       
                                                        search:"",
                                                        requests:[],
                                                        filterBtns:[]
  })
  const [displayedRequests,setDisplayedRequests] = useState([])

  useEffect(()=>{

    const getRequests = async () =>{
      try{
        const resp = await api.get("requests/")
        const requests = resp.data
        dispatch({type:"requests", payload:[...requests]})
        setDisplayedRequests(requests)
        dispatch({type:"filterBtns",payload:getRequestAssetTypes(requests)})
          
      }catch(err){
        console.log(err)
      }
    }
     getRequests()
  },[])
console.log(state.filterBtns)
  return (
  <div className="admin-requests-wrapper flex flex-col">
        <div className="container">
          <header className="admin-all-assets-header |  dark:text-neutral-200">
            <div className="admin-total-assets-and-assets-search-wrapper | flex">
              <div className="admin-all-assets-filtered-assets-wrapper | flex ">
                <p><span className="uppercase font-bold">all requests</span>: <span
                    className="font-semibold">{state.requests.length}</span></p>
                <p><span className="uppercase font-bold ">filtered requests</span>: <span
                    className="font-semibold">{displayedRequests.length}</span></p>
              </div>
              <div className="admin-all-assets-search-bar-wrapper">
                <input onChange={e=> dispatch({type:"search",payload:e.target.value})}type="text"
                className="admin-all-assets-search-bar" placeholder="Search by employee name or department" value={state.search}/>
              </div>
            </div>
            <div className="admin-all-assets-filter-btns  | flex">
            </div>
          </header>
        </div>
    <div className="admin-requests-table-wrapper | grow shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
        <table className="admin-requests-table ">
          <caption className="table-caption | font-bold text-600 uppercase ">requests</caption>
          <thead>
            <tr className="table-headings | text-neutral-100 uppercase font-semibold ">
              <th className="table-heading"></th>
              <th className="table-heading">employee name</th>
              <th className="table-heading">department</th>
              <th className="table-heading">asset name</th>
              <th className="table-heading">type</th>
              <th className="table-heading">serial</th>
              <th className="table-heading">phone no.</th>
              <th className="table-heading"></th>
            </tr>
          </thead>
          <tbody>
            {/* ------------------ */}
            {/* <RequestsTableDataRow/> */}
            {
              displayedRequests.filter(request => {
                if(state.search === ""){
                  return request
                }else if(request.employee.first_name.toLowerCase().includes(state.search.toLowerCase()) ||
                request.employee.last_name.toLowerCase().includes(state.search.toLowerCase())||
                request.employee.department.toLowerCase().includes(state.search.toLowerCase())
              ){
                  return request
                }
              }).map(request => <RequestsTableDataRow key={request.id} request={request}/> )
            }
            {/* ------------------ */}
          </tbody>
        </table>
      </div>
  </div>
  )
}

export default Requests