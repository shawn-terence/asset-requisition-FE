
import { useReducer,useEffect, useState } from "react"

const userAccountDetailsReducer = (state,action) => {
  switch(action.type){
    case"changePassword":
        return {...state,changePassword:action.payload}
    case"confirmPassword":
        return {...state,confirmPassword:action.payload}    
    default:
      throw new Error("Action type undefined")
  }
}


const UserAccountDetails = () => {
const [state,dispatch] = useReducer(userAccountDetailsReducer,{
                                                              changePassword:"",
                                                              confirmPassword:""
})
const [passwordVisibility,setPasswordVisibility] = useState(false)
const [userAccount,setUserAccount] = useState({})


const localStoredAccount = JSON.parse(localStorage.getItem('arsUserAccount'))

useEffect(()=>{

  if(localStoredAccount){
  setUserAccount(localStoredAccount)
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

console.log(state)


const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="user-account-form-wrapper | flow shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
      <p className="text-600 uppercase font-bold">account details</p>
      <form onSubmit={handleSubmit}className="user-account-form | flow ">
        <div className="user-account-names-wrapper | flex">
       {/* First Name */}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="user-account-form-firstName" className="user-account-details-label | capitalize text-500 font-semibold">first name</label>
            <input className="user-account-details-input text-neutral-450" type="text" name="firstName" id="user-account-form-firstName" value={userAccount.first_name} readOnly/>
          </div>
        {/* Last Name */}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="user-account-form-lastName" className="user-account-details-label | capitalize text-500 font-semibold">last name</label>
            <input className="user-account-details-input text-neutral-450" type="text" name="lastName" id="user-account-form-lastName" value={userAccount.last_name}readOnly/>
          </div>
        </div>
        <div className="user-phone-department-wrapper | flex">
       {/* Department */}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="department" className="user-account-details-label | capitalize text-500 font-semibold">department</label>
            <input className="user-account-details-input text-neutral-450" type="text" name="department" id="user-account-form-department" value={userAccount.department} readOnly/>
          </div>
        {/* Phone number */}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="phone" className="user-account-details-label | capitalize text-500 font-semibold">phone number</label>
            <input className="user-account-details-input text-neutral-450" type="text" name="phoneNumber"id="user-account-form-phone" value={userAccount.phone_number} readOnly/>
          </div>
        </div>
        {/* email*/}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="user-account-form-email" className="user-account-details-label | capitalize text-500 font-semibold">email</label>
            <input className="user-account-details-input text-neutral-450" type="email" name="phoneNumber" id="user-account-form-email" value={userAccount.email} readOnly/>
          </div>
        {/* change password*/}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="user-account-form-password" className="user-account-details-label | capitalize text-500 font-semibold">change password</label>
            <input onChange={(e)=>dispatch({type:"changePassword",payload:e.target.value})} className="user-account-details-input" type={passwordVisibility ?"text":"password"} name="password" id="user-account-form-password" value={state.changePassword}/>
          </div>
        {/* confirm password*/}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="user-account-form-confirm-password" className="user-account-details-label | capitalize text-500 font-semibold">confirm changed password</label>
            <input onChange={(e)=>dispatch({type:"confirmPassword",payload:e.target.value})} className="user-account-details-input" type={passwordVisibility ?"text":"password"} name="change-password" id="user-account-form-confirm-password" value={state.confirmPassword}/>
          </div>
          <button type="submit" className="btn primary-btn uppercase text-300 font-bold">update</button>
      </form>
    </div>
  )
}

export default UserAccountDetails

