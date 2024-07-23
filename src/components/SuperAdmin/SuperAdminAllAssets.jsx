import SuperAdminAllAssetsCard from "./SuperAdminAllAssetsCard"
import api from "../../API/BaseURL"
import { addFilterBtns } from "../SharedComponents/SharedFunctions"

import { useEffect, useReducer, useState } from "react" 

const superAdminAllAssetsReducer = (state,action) =>{
  switch(action.type){
    case"search":
      return {...state,search:action.payload} 
    case"category":          
        return {...state,category:[...action.payload]}
    default:
      throw new Error('action type is undefined') 
  }
}



const SuperAdminAllAssets = () => {
  
  const [state,dispatch] = useReducer(superAdminAllAssetsReducer,{
                                                                search:"",
                                                                category:[]
  })
  const [assets,setAssets] = useState([])
  const [selectedCategories,setSelectedCategories] = useState([])
  const [displayedAssets,setDisplayedAssets] = useState([])

    useEffect( () =>{
    const fetchAssets = async () =>{
      try{
        const resp = await api.get("assets/allassets/")
        setAssets(resp.data)
        dispatch({type:"category",payload:addFilterBtns(resp.data)})
        setDisplayedAssets(resp.data)
      }
      catch(err){
        console.error("Error fetching data: ",err)
      }
    }
    fetchAssets()
  },[])


  const handleCategorySelection = (category) =>{
    let categoryToLowerCase = category.toLowerCase()
    const newSelectedCategories = selectedCategories.includes(categoryToLowerCase)
      ? selectedCategories.filter((el) => el !== categoryToLowerCase)
      : [...selectedCategories, categoryToLowerCase];

    setSelectedCategories(newSelectedCategories);
    filterDisplay(newSelectedCategories);
  }

  const filterDisplay = (categories) => {
      if(categories.length === 0 ){        
        setDisplayedAssets(assets)
      }
      else{           
        const filteredAssets = assets.filter((asset) =>
        categories.includes(asset.category.toLowerCase())
      );
      setDisplayedAssets(filteredAssets)        
  }
  }

  return (
      <div className="super-admin-all-assets">
        <div className="container">
          <header className="super-admin-all-assets-header |  dark:text-neutral-200">
            <div className="super-admin-total-assets-and-assets-search-wrapper | flex">
              <div className="super-admin-all-assets-filtered-assets-wrapper | flex ">
                <p><span className="uppercase font-bold">all assets</span>: <span
                    className="font-semibold">{assets.length}</span></p>
                <p><span className="uppercase font-bold ">filtered assets</span>: <span
                    className="font-semibold">{displayedAssets.length}</span></p>
              </div>
              <div className="super-admin-all-assets-search-bar-wrapper">
                <input onChange={e=> dispatch({type:"search",payload:e.target.value})}type="text"
                className="super-admin-all-assets-search-bar" placeholder="Search by name or type" />
              </div>
            </div>
            <div className="super-admin-all-assets-filter-btns  | flex">
              {state.category.map((name)=>{
              return (<button onClick={()=>{handleCategorySelection(name)}}
                className={`capitalize btn ${selectedCategories.includes(name)?"filter-primary-btn":"ghost-btn"}`}
                key={name}>{name}
              </button>)
              })}</div>
          </header>
        </div>
        <div className="super-admin-all-assets-body flow">
          {displayedAssets.filter((asset) => {
          return (state.search.toLowerCase() === '' ? asset : asset.name.toLowerCase().includes(state.search.toLowerCase()) ||
          asset.asset_type.toLowerCase().includes(state.search.toLowerCase()) )
          }).map(asset =>
          <SuperAdminAllAssetsCard asset={asset} key={asset.id} />)}
        </div>
      </div>
  )
}

export default SuperAdminAllAssets