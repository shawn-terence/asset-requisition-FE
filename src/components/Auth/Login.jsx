

import DarkModeToggle from "../DarkMode/DarkModeToggle"
import { useReducer,useState } from "react"
import api from "../../API/BaseURL"

import { useNavigate , NavLink } from "react-router-dom"

const loginReducer = (state,action) => {
  switch(action.type){
    case 'email':
      return {...state,email:action.payload}
    case 'password':
      return {...state, password:action.payload}
  
    default:
        throw new Error("undefined action type")
  }
}


const Login = () => {
  const [passwordVisibility,setPasswordVisibility] = useState(false)
  const navigate = useNavigate()
  const [state,dispatch] = useReducer(loginReducer,{
                                              email:"",
                                              password:""                                              
  })
    const handleSubmit = async (e) =>{
    e.preventDefault()
    
    try{
      const resp = await api.post("user/login/",state)
      localStorage.setItem('token',resp.data.token)  
      const user = resp.data.user
      
      localStorage.setItem('arsUserAccount',JSON.stringify(user))         
      if(user.role === 'employee'){
        navigate("/employee")
      }else if(user.role === 'admin'){
        navigate("/admin")
      }else if (user.role === 'superadmin'){
        navigate("/super-admin")
      }
      dispatch({type:"email",payload:""})
      dispatch({type:"password",payload:""})
      
    }catch(err){
      throw new Error("Error on log in ", err)
    }
  }

  const handlePasswordVisibility =()=>{
    setPasswordVisibility(!passwordVisibility)
  }
  

  return (
    <div className="login-pg | grid  dark:text-neutral-200 text-neutral-900
    bg-[url('https://github.com/Fuego-fuego/asset-requisition-FE/blob/main/public/assets-requisition-system-high-resolution-logo.png?raw=true')]
    dark:bg-[url('https://github.com/Fuego-fuego/asset-requisition-FE/blob/main/public/assets-requisition-system-high-resolution-logo-white.png?raw=true')]
    ">
    <div className="login-form-wrapper | flex flex-col bg-neutral-100 dark:bg-neutral-700">
      <div className="logo-dark-mode-toggle-wrapper | flex ">
        <p className="login-logo | logo font-tilt-prism font-bold uppercase tracking-widest text-550  text-neutral-800 dark:text-neutral-100 ">ars</p>
        <DarkModeToggle/>
      </div>
      <p className="login-heading | font-poppins text-600 font-semi-bold text-center uppercase">log in</p>
      <form onSubmit={handleSubmit} className="login-form | flex flex-col">
        {/* Email */}
        <div className="login-form-element-wrapper | flex flex-col">
          <label htmlFor="email " className="capitalize font-semi-bold text-500">email</label>
          <input onChange= { (e) => {dispatch({type:"email",payload:e.target.value})}}className="login-form-input" type="email" id="email" name="email" placeholder="johndoe@mail.com" value={state.email}required/>
        </div>
        {/* Password */}
        <div className="login-form-element-wrapper | flex flex-col">
          <label htmlFor="password " className="capitalize font-semi-bold text-500">password</label>
          <div className="login-form-password-input-wrapper | flex">          
          <input onChange = {(e)=>{dispatch({type:'password',payload:e.target.value})}} className="login-form-password-input " type={passwordVisibility?"text":"password"} id="password" name="password" value={state.password}required/>
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
                            <svg onClick={() => {handlePasswordVisibility()}}
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
        <button className="login-form-submit-btn | btn primary-btn uppercase text-300 font-bold">login</button>
      </form>
      <div className="login-to-sign-up-redirect-link-wrapper  | italic flex text-300">
        <p className="login-to-sign-up-redirect-link-p |   text-gray-500">Don&apos;t have an account ? </p>
        <NavLink to="/sign-up" className="login-to-sign-up-redirect-link-p | link  font-semi-bold">Sign up</NavLink>
      </div>
    </div>
      </div>
  )
}

export default Login

