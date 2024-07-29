import { useReducer} from "react"


const requestsReducer = (state,action) =>{
  switch(action.type){
    case'search':
      return {...state,search:action.payload}
    default:
      throw new Error("action type is undefined")
  }
}


const Requests = () => {
  const [state,dispatch] = useReducer(requestsReducer,{                                                       
                                                        search:""

  })

console.log(state.search)
  return (
  <div className="admin-requests-wrapper flex flex-col">
        <div className="container">
          <header className="admin-all-assets-header |  dark:text-neutral-200">
            <div className="admin-total-assets-and-assets-search-wrapper | flex">
              <div className="admin-all-assets-filtered-assets-wrapper | flex ">
                <p><span className="uppercase font-bold">all assets</span>: <span
                    className="font-semibold">{}</span></p>
                <p><span className="uppercase font-bold ">filtered assets</span>: <span
                    className="font-semibold">{}</span></p>
              </div>
              <div className="admin-all-assets-search-bar-wrapper">
                <input onChange={e=> dispatch({type:"search",payload:e.target.value})}type="text"
                className="admin-all-assets-search-bar" placeholder="Search by name or type" value={state.search}/>
              </div>
            </div>
            <div className="admin-all-assets-filter-btns  | flex">
            </div>
          </header>
        </div>
    <div className="admin-requests-table-wrapper | grow shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
        <table className="admin-requests-table ">
          <caption className="table-caption | font-bold text-600 uppercase ">requests</caption>
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
          {/* ------------------ */}
    
          {/* ------------------ */}
        </table>
      </div>
  </div>
  )
}

export default Requests