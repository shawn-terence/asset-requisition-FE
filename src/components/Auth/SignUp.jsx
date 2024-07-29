
import DarkModeToggle from "../DarkMode/DarkModeToggle"
import api from "../../API/BaseURL"

import {useNavigate, NavLink } from "react-router-dom"
import { useReducer } from "react"


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
    case'passwordVisibility':
      return {...state, passwordVisibility:!state.passwordVisibility} 
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

  const handleSubmit = async (e) =>{
    e.preventDefault()

    try{
      const resp =  await api.post("user/register/",state)
      const account  = resp.data
      localStorage.setItem('token', account.token)
      localStorage.setItem('arsUserAccount',JSON.stringify(account))
      navigate("/employee")
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
          <input onChange = {(e)=>{dispatch({type:"password",payload:e.target.value})}}className="sign-up-form-input" type="password" id="password" name="password" value={state.password}required/>
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


