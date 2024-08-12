
import DarkModeToggle from "../DarkMode/DarkModeToggle"
import api from "../../API/BaseURL"

import {useNavigate, NavLink } from "react-router-dom"
import { useState, useReducer } from "react"


const signUpReducer = (state,action) =>{
  switch(action.type){
    case "firstName":
      return {...state,first_name:action.payload}
    case "lastName":
      return {...state, last_name:action.payload}
    case "department":
      return {...state,department:action.payload}
    case "email":
      return {...state,email:action.payload}
    case "phoneNumber":
      return {...state, phone_number:action.payload}
    case "password":
      return {...state, password:action.payload} 
    default :
    throw new Error ("action type undefined")


  }
}


const SignUp = () => {
  const navigate = useNavigate()
  const [state,dispatch] = useReducer(signUpReducer,{
          first_name:"",
          last_name:"",
          department:"",
          email:"",
          phone_number:"",
          password:"",
          role:"employee"
    });
  const [passwordVisibility,setPasswordVisibility] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try{
      const resp =  await api.post("user/register/",state)
      const user  = resp.data      
      navigate("/login")
      dispatch({type:"firstName", payload:""})
      dispatch({type:"lastName", payload:""})     
      dispatch({type:"department", payload:""})
      dispatch({type:"email", payload:""})
      dispatch({type:"phoneNumber", payload:""})
      dispatch({type:"password", payload:""})

    }catch(err){
      throw new Error ("Error singing up", err)
    }


  }
  
  const handlePasswordVisibility =()=>{
    setPasswordVisibility(!passwordVisibility)
  }

  return (
 <div className="sign-up-pg | dark:text-neutral-200 text-neutral-900">
    <div className="sign-up-form-wrapper | flex flex-col bg-neutral-100 dark:bg-neutral-700">
      <div className="logo-dark-mode-toggle-wrapper-sign-up | logo-dark-mode-toggle-wrapper flex ">
        <p className="sign-up-logo | logo font-tilt-prism font-bold uppercase tracking-widest text-500  text-neutral-800 dark:text-neutral-100 ">ars</p>
        <DarkModeToggle/>
      </div>
      <form onSubmit={handleSubmit} className="sign-up-form | flex flex-col flow">
        <p className="sign-up-form-heading | font-poppins text-700 font-semi-bold text-center capitalize">create account</p>
        {/* First Name */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="firstName" className="capitalize font-semi-bold text-500">first name</label>
          <input onChange = {(e)=>{dispatch({type:"firstName",payload:e.target.value})}}className="sign-up-form-input" type="text" id="firstName" name="firstName" placeholder="John" value={state.first_name} required/>
        </div>
        {/* Last Name */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="lastName" className="capitalize font-semi-bold text-500">last name</label>
          <input onChange = {(e)=>{dispatch({type:"lastName",payload:e.target.value})}}className="sign-up-form-input" type="lastName" id="lastName" name="lastName" placeholder="Doe" value={state.last_name}required/>
        </div>
        {/* Department */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="department" className="capitalize font-semi-bold text-500">department</label>
          <input onChange = {(e)=>{dispatch({type:"department",payload:e.target.value})}}className="sign-up-form-input" type="text" id="department" name="department" placeholder="Human resource" value={state.department}required/>
        </div>
        {/* Email */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="email " className="capitalize font-semi-bold text-500">email</label>
          <input onChange = {(e)=>{dispatch({type:"email",payload:e.target.value})}}className="sign-up-form-input" type="email" id="email" name="email" placeholder="johndoe@mail.com" value={state.email}required/>
        </div>
        {/*Phone Number*/}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="phoneNumber" className="capitalize font-semi-bold text-500">phone number</label>
          <input onChange = {(e)=>{dispatch({type:"phoneNumber",payload:e.target.value})}}className="sign-up-form-input" type="number" id="phoneNumber" name="phoneNumber" placeholder="254701010101" value={state.phone_number}required/>
        </div>
        {/* Password */}
        <div className="sign-up-form-element-wrapper | flex flex-col">
          <label htmlFor="password " className="capitalize font-semi-bold text-500">password</label>
                    <div className="sign-up-form-password-input-wrapper | flex">          
          <input onChange = {(e)=>{dispatch({type:'password',payload:e.target.value})}} className="sign-up-form-password-input " type={passwordVisibility?"text":"password"} id="password" name="password" value={state.password}required/>
          {passwordVisibility ? (
                            <svg onClick={() =>{handlePasswordVisibility()}}
                                className="user-account-details-password-visibility-icon size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="user-account-details-password-visibility-icon size-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        ) : (
                            <svg onClick={() =>{handlePasswordVisibility()}}
                                className="user-account-details-password-visibility-icon size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="user-account-details-password-visibility-icon size-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                        )}          
          </div>
        </div>
        <button className="sign-up-form-submit-btn | btn primary-btn uppercase text-300 font-bold">sign-up</button>
      </form>
      <div className="sign-up-to-login-redirect-link-wrapper  | italic flex text-300">
        <p className="sign-up-to-login-redirect-link-p |   text-gray-500">Already have an account ? </p>
        <NavLink to="/login" className="sign-up-to-login-redirect-link | link  font-semi-bold">Login</NavLink>
      </div>
    </div>
      </div>
  )
}

export default SignUp


