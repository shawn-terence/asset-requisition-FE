import api from "../../API/BaseURL"
import { useReducer,useEffect, useState } from "react"

const userAccountDetailsReducer = (state,action) => {
  switch(action.type){
    case"changePassword":
        return {...state,changePassword:action.payload}
    case"confirmPassword":
        return {...state,confirmPassword:action.payload}
    case"changePasswordVisibility":
        return{...state,changePasswordVisibility:!state.changePasswordVisibility}        
    case"confirmPasswordVisibility":
        return{...state,confirmPasswordVisibility:!state.confirmPasswordVisibility}        
    default:
      throw new Error("Action type undefined")
  }
}


const UserAccountDetails = () => {
    const [state, dispatch] = useReducer(userAccountDetailsReducer, {
        changePassword: '',
        confirmPassword: '',
        changePasswordVisibility:false,
        confirmPasswordVisibility:false
    });

    const [userAccount, setUserAccount] = useState({});
    const [token,setToken] = useState("");
    
    useEffect(() => {
        const localStoredAccount = JSON.parse(localStorage.getItem('arsUserAccount'));    
        if (localStoredAccount) {
            setUserAccount(localStoredAccount)
            setToken(localStorage.getItem('token'))
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps   
    }, []);
        
    const handleSubmit = (e) => {
        e.preventDefault()
        const handleUpdate = async () =>{
            try{
                if(state.changePassword === state.confirmPassword){
                const resp = api.put('user/updatepassword/',{"password":state.changePassword},
                        {
                            headers: {
                            'Authorization':`Token ${token}`
                        }
                        }
                    )
                dispatch({type:"changePassword",payload:""})
                dispatch({type:"confirmPassword",payload:""})
                }
                else{
                    console.error("changed password and confirmed password does not match")
                }
            }
            catch(err){
                throw new Error (err)
            }
        } 
        handleUpdate()
    };

        
    return (
        <div className="user-account-form-wrapper | flow shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
            <p className="text-600 uppercase font-bold">account details</p>
            <form onSubmit={handleSubmit} className="user-account-form | flow ">
                <div className="user-account-names-wrapper | flex">
                    {/* First Name */}
                    <div className="user-account-form-element-wrapper | flex flex-col">
                        <label
                            htmlFor="user-account-form-firstName"
                            className="user-account-details-label | capitalize text-500 font-semibold"
                        >
                            first name
                        </label>
                        <input
                            className="user-account-details-input text-neutral-450"
                            type="text"
                            name="firstName"
                            id="user-account-form-firstName"
                            value={userAccount.first_name}
                            readOnly
                        />
                    </div>
                    {/* Last Name */}
                    <div className="user-account-form-element-wrapper | flex flex-col">
                        <label
                            htmlFor="user-account-form-lastName"
                            className="user-account-details-label | capitalize text-500 font-semibold"
                        >
                            last name
                        </label>
                        <input
                            className="user-account-details-input text-neutral-450"
                            type="text"
                            name="lastName"
                            id="user-account-form-lastName"
                            value={userAccount.last_name}
                            readOnly
                        />
                    </div>
                </div>
                <div className="user-phone-department-wrapper | flex">
                    {/* Department */}
                    <div className="user-account-form-element-wrapper | flex flex-col">
                        <label
                            htmlFor="department"
                            className="user-account-details-label | capitalize text-500 font-semibold"
                        >
                            department
                        </label>
                        <input
                            className="user-account-details-input text-neutral-450"
                            type="text"
                            name="department"
                            id="user-account-form-department"
                            value={userAccount.department}
                            readOnly
                        />
                    </div>
                    {/* Phone number */}
                    <div className="user-account-form-element-wrapper | flex flex-col">
                        <label
                            htmlFor="phone"
                            className="user-account-details-label | capitalize text-500 font-semibold"
                        >
                            phone number
                        </label>
                        <input
                            className="user-account-details-input text-neutral-450"
                            type="text"
                            name="phoneNumber"
                            id="user-account-form-phone"
                            value={userAccount.phone_number}
                            readOnly
                        />
                    </div>
                </div>
                {/* email*/}
                <div className="user-account-form-element-wrapper | flex flex-col">
                    <label
                        htmlFor="user-account-form-email"
                        className="user-account-details-label | capitalize text-500 font-semibold"
                    >
                        email
                    </label>
                    <input
                        className="user-account-details-input text-neutral-450"
                        type="email"
                        name="phoneNumber"
                        id="user-account-form-email"
                        value={userAccount.email}
                        readOnly
                    />
                </div>
                {/* change password*/}
                <div className="user-account-form-element-wrapper | flex flex-col">
                    <label
                        htmlFor="user-account-form-password"
                        className="user-account-details-label | capitalize text-500 font-semibold"
                    >
                        change password
                    </label>
                    <div className="user-account-details-password-input-field-wrapper | flex">
                        <input
                            className="user-account-details-password-input"
                            onChange={(e) =>
                                dispatch({
                                    type: 'changePassword',
                                    payload: e.target.value,
                                })
                            }
                            type={state.changePasswordVisibility ? 'text' : 'password'}
                            name="password"
                            id="user-account-form-password"
                            value={state.changePassword}
                        />
                        {state.changePasswordVisibility ? (
                            <svg onClick={() =>{dispatch({type:"changePasswordVisibility"})}}
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
                            <svg onClick={() =>{dispatch({type:"changePasswordVisibility"})}}
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
                {/* confirm password*/}
                <div className="user-account-form-element-wrapper | flex flex-col">
                    <label
                        htmlFor="user-account-form-confirm-password"
                        className="user-account-details-label | capitalize text-500 font-semibold"
                    >
                        confirm changed password
                    </label>
                    <div className="user-account-details-password-input-field-wrapper | flex">
                        <input
                            className="user-account-details-password-input"
                            onChange={(e) =>
                                dispatch({
                                    type: 'confirmPassword',
                                    payload: e.target.value,
                                })
                            }
                            type={state.confirmPasswordVisibility ? 'text' : 'password'}
                            name="change-password"
                            id="user-account-form-confirm-password"
                            value={state.confirmPassword}
                        />
                        {state.confirmPasswordVisibility ? (
                            <svg onClick={() =>{dispatch({type:"confirmPasswordVisibility"})}}
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
                            <svg onClick={() =>{dispatch({type:"confirmPasswordVisibility"})}}
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
                <button
                    type="submit"
                    className="btn primary-btn uppercase text-300 font-bold"
                >
                    update
                </button>
            </form>
        </div>
    );
};

export default UserAccountDetails

