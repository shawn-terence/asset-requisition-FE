import EmployeeMyAssetsCard from "./EmployeeMyAssetsCard"

import {useState,useReducer, useEffect} from "react"
import api from  "../../API/BaseURL"
const employeeMyAssetsReducer = (state,action) => {
  switch(action.type){
    case 'search':
      return {...state,search:action.payload}
    case 'assets':
      return {...state,assets:action.payload}
    default:
    console.log('action type undefined')
  }
}



const EmployeeMyAssets = () => {
  const [state,dispatch] = useReducer(employeeMyAssetsReducer,{
                                                              search:'',
                                                              assets:[]
  })
  const [displayedAssets,setDisplayedAssets] = useState([])

  useEffect(()=>{
    const getAsset = async ( ) =>{
      try{
        const resp = await api.get("assets/")
        console.log(resp)
      }
      catch(err){
        console.log(err)
      }
    }
    getAsset()
  },[])
  return (
    <div className="employee-all-assets">
      <div className="container">
        <header className="employee-all-assets-header |  dark:text-neutral-200">
          <div className="employee-total-assets-and-assets-search-wrapper | flex">
            <div className="employee-all-assets-filtered-assets-wrapper | flex ">
              <p><span className="uppercase font-bold">my assets</span>: <span
                  className="font-semibold">{state.assets.length}</span></p>
              <p><span className="uppercase font-bold ">filtered assets</span>: <span
                  className="font-semibold">{displayedAssets.length}</span></p>
            </div>
            <div className="employee-all-assets-search-bar-wrapper">
              <input onChange={e => dispatch({type:"search",payload:e.target.value})}type="text" className="employee-all-assets-search-bar" placeholder="Search by name or type" />
            </div>
          </div>
          {/* <div className="employee-all-assets-filter-btns  | flex">
            {state.category.map((name)=>{
            return (<button onClick={()=>{handleCategorySelection(name)}} 
                    className={`capitalize btn  ${selectedCategories.includes(name)?"filter-primary-btn":"ghost-btn"}`}  key={name}>{name}
                    </button>)
          })}</div> */}
        </header>
      </div>
      <div className="employee-all-assets-body flow">
      {/* {displayedAssets.filter((asset) => {
        return (state.search.toLowerCase() === '' ? asset : asset.name.toLowerCase().includes(state.search.toLowerCase()) || asset.asset_type.toLowerCase().includes(state.search.toLowerCase())  )
      }).map(asset => <EmployeeAllAssetsCard asset={asset} key={asset.id} />)}
      </div> */}
    </div>
    </div>
  )
}

export default EmployeeMyAssets