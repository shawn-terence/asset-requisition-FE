const UserAccountDetails = () => {

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
            <input className="user-account-details-input text-neutral-450" type="text" name="user-account-form-firstName" id="user-account-form-firstName" value="john"/>
          </div>
        {/* Last Name */}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="user-account-form-lastName" className="user-account-details-label | capitalize text-500 font-semibold">last name</label>
            <input className="user-account-details-input text-neutral-450" type="text" name="lastName" id="user-account-form-lastName" value="doe"/>
          </div>
        </div>
        <div className="user-phone-department-wrapper | flex">
       {/* Department */}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="department" className="user-account-details-label | capitalize text-500 font-semibold">department</label>
            <input className="user-account-details-input text-neutral-450" type="text" name="department" id="user-account-form-department" value="john"/>
          </div>
        {/* Phone number */}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="phone" className="user-account-details-label | capitalize text-500 font-semibold">phone number</label>
            <input className="user-account-details-input text-neutral-450" type="number" name="phoneNumber"id="user-account-form-phone" value="254701010101"/>
          </div>
        </div>
        {/* email*/}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="user-account-form-email" className="user-account-details-label | capitalize text-500 font-semibold">email</label>
            <input className="user-account-details-input text-neutral-450" type="email" name="phoneNumber" id="user-account-form-email" value="johndoe@mail.com"/>
          </div>
        {/* change password*/}
          <div className="user-account-form-element-wrapper | flex flex-col">
            <label htmlFor="user-account-form-password" className="user-account-details-label | capitalize text-500 font-semibold">change password</label>
            <input className="user-account-details-input text-neutral-450" type="password" name="user-account-form-password" id="user-account-form-password" />
          </div>
          <button type="submit" className="btn primary-btn uppercase text-300 font-bold">update</button>
      </form>
    </div>
  )
}

export default UserAccountDetails