import { useReducer } from "react"

const addAssetsReducer = (state,action) => {
  switch(action.type){
    case"name":
      return {...state,name:action.payload}
    case "category":
      return {...state, category:action.payload}
    case"type":
      return {...state, assets_type:action.payload}
    case"tag":
      return {...state, tag:action.payload}
    case"serial":
      return {...state, serial_number:action.payload}
    case"description":
      return {...state,description:action.payload}
    case "image":
      return {...state,image:action.payload}
    default :
      throw new Error("undefined action type")
  }
}



const AddAssets = () => {

  const [state,dispatch] = useReducer(addAssetsReducer,{
    name:"",
    category:"",
    assets_type:"",
    tag:"",
    serial_number:"",
    description:"",
    image:"",
    status:"available"
  })
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  console.log(state)

  return (
    <div className="add-asset-form-wrapper | flow shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
      <p className="text-600 uppercase font-bold text-center">add Asset form</p>
      <form onSubmit={handleSubmit}className="add-asset-form | flow ">
       {/* Name */}
          <div className="add-asset-form-element-wrapper | flex flex-col">
            <label htmlFor="add-asset-form-name" className="add-asset-details-label | capitalize text-500 font-semibold">Asset name</label>
            <input onChange={(e)=>{dispatch({type:"name",payload:e.target.value})}}className="add-asset-details-input capitalize" type="text" name="name" id="add-asset-form-name" placeholder="HP Pavilion Laptop 16-Ag0087nr" value={state.name} required/>
          </div>  
        {/* Add Asset Form Category Type wrapper  */}
        <div className="add-asset-form-category-type-wrapper | flex">
       {/* Category */}
          <div className="add-asset-form-element-wrapper | flex flex-col">
            <label htmlFor="add-asset-form-category" className="add-asset-details-label | capitalize text-500 font-semibold">category</label>
            <input onChange={(e)=>{dispatch({type:"category",payload:e.target.value})}}className="add-asset-details-input capitalize" type="text" name="category" id="add-asset-form-category" placeholder="electronics" value={state.category} required/>
          </div>
        {/* Type */}
          <div className="add-asset-form-element-wrapper | flex flex-col">
            <label htmlFor="add-asset-form-type" className="add-asset-details-label | capitalize text-500 font-semibold">type</label>
            <input onChange={(e)=>{dispatch({type:"type",payload:e.target.value})}}className="add-asset-details-input capitalize" type="text" name="type" id="add-asset-form-type" placeholder="laptop" value={state.type} required/>
          </div>
        </div>
        {/* Add Asset Form Tag Serial number wrapper  */}
        <div className="add-asset-form-tag-serial-wrapper | flex">
       {/* Tag Number */}
          <div className="add-asset-form-element-wrapper | flex flex-col">
            <label htmlFor="add-asset-form-tag" className="add-asset-details-label | capitalize text-500 font-semibold">tag number</label>
            <input onChange={(e)=>{dispatch({type:"tag",payload:e.target.value})}}className="add-asset-details-input capitalize" type="text" name="tag" id="add-asset-form-tag" placeholder="electronics" value={state.tag} required/>
          </div>
        {/* Serial Number */}
          <div className="add-asset-form-element-wrapper | flex flex-col">
            <label htmlFor="add-asset-form-serial" className="add-asset-details-label | capitalize text-500 font-semibold">serial</label>
            <input onChange={(e)=>{dispatch({type:"serial",payload:e.target.value})}}className="add-asset-details-input capitalize" type="text" name="serial" id="add-asset-form-serial" placeholder="laptop" value={state.serial_number} required/>
          </div>
        </div>
        {/* Description */}
          <div className="add-asset-form-element-wrapper | flex flex-col">
            <label htmlFor="add-asset-form-description" className="add-asset-details-label | capitalize text-500 font-semibold">description</label>
            <textarea onChange={(e)=>{dispatch({type:"description",payload:e.target.value})}}className="add-asset-details-input capitalize" rows="6" name="description" id="add-asset-form-description" placeholder="color:silver,RAM:8GB,DiskType:SSD..." value={state.description} required/>
          </div>
        {/* Image*/} 
          <div className="add-asset-form-element-wrapper flex flex-col">
          <label htmlFor="add-asset-form-image" className="add-asset-details-label | capitalize text-500 font-semibold">asset image</label>
          <input type="file" onChange={(e)=>{dispatch({type:"image",payload:e.target.files[0]})}}className="bg-transparent" name="image" id="add-asset-form-image" required/>
          </div>
          <button type="submit" className="btn primary-btn capitalize text-00 font-bold">add asset</button>
      </form>
    </div>
  )
}

export default AddAssets