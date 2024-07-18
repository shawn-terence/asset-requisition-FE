const EmployeeRequests = () => {

  
  return (
    <div className="employee-requests-table-wrapper | shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
      <table className="employee-requests-table ">
        <caption className="table-caption | font-bold text-600 uppercase ">my requests</caption>
        <tr className="table-headings | text-neutral-100 uppercase font-semibold ">
          <th className="table-heading">name</th>
          <th className="table-heading">category</th>
          <th className="table-heading">type</th>
          <th className="table-heading">serial</th>
          <th className="table-heading">status</th>
          <th className="table-heading"></th>
        </tr>
      </table>

    </div>
  )
}

export default EmployeeRequests