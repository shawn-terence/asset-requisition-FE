const EmployeeAccountDetails = () => {
  return (
    <section className="employee-form-wrapper | flow shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
      <p className="text-600 uppercase font-bold">account details</p>
      <form className="employee-account-form | flow ">
        <div className="employee-names-wrapper | flex">
       {/* First Name */}
          <div className="employee-account-form-element-wrapper | flex flex-col">
            <label htmlFor="employee-account-form-firstName" className="employee-account-details-label | capitalize text-500 font-semibold">first name</label>
            <input className="employee-account-details-input text-neutral-450" type="text" name="employee-account-form-firstName" id="employee-account-form-firstName" value="john"/>
          </div>
        {/* Last Name */}
          <div className="employee-account-form-element-wrapper | flex flex-col">
            <label htmlFor="employee-account-form-lastName" className="employee-account-details-label | capitalize text-500 font-semibold">last name</label>
            <input className="employee-account-details-input text-neutral-450" type="text" name="lastName" id="employee-account-form-lastName" value="doe"/>
          </div>
        </div>
        <div className="employee-phone-department-wrapper | flex">
       {/* Department */}
          <div className="employee-account-form-element-wrapper | flex flex-col">
            <label htmlFor="department" className="employee-account-details-label | capitalize text-500 font-semibold">department</label>
            <input className="employee-account-details-input text-neutral-450" type="text" name="department" id="employee-account-form-department" value="john"/>
          </div>
        {/* Phone number */}
          <div className="employee-account-form-element-wrapper | flex flex-col">
            <label htmlFor="phone" className="employee-account-details-label | capitalize text-500 font-semibold">phone number</label>
            <input className="employee-account-details-input text-neutral-450" type="number" name="phoneNumber"id="employee-account-form-phone" value="254701010101"/>
          </div>
        </div>
        {/* email*/}
          <div className="employee-account-form-element-wrapper | flex flex-col">
            <label htmlFor="employee-account-form-email" className="employee-account-details-label | capitalize text-500 font-semibold">email</label>
            <input className="employee-account-details-input text-neutral-450" type="email" name="phoneNumber" id="employee-account-form-email" value="johndoe@mail.com"/>
          </div>
        {/* change password*/}
          <div className="employee-account-form-element-wrapper | flex flex-col">
            <label htmlFor="employee-account-form-password" className="employee-account-details-label | capitalize text-500 font-semibold">change password</label>
            <input className="employee-account-details-input text-neutral-450" type="password" name="employee-account-form-password" id="employee-account-form-password" />
          </div>
          <button type="submit" className="btn primary-btn uppercase text-300 font-bold">update</button>
      </form>
    </section>
  )
}

export default EmployeeAccountDetails