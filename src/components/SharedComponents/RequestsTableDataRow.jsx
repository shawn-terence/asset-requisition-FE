import PropTypes from 'prop-types'

const RequestsTableDataRow = ({request}) => {
    const {asset,employee} = request
    // console.log(asset,employee)
    const {first_name,last_name,department,phone_number} = employee
    const {name,asset_type,serial_number} = asset 
    return (
    <tr className="table-row | text-300 capitalize">
        <td className="table-data-request-view-icon" data-cell="employee-name">
            <div className="details-icon | stroke-accent-700 actions-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                    <path fill-rule="evenodd"
                        d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </td>
        <td className="table-data" data-cell="employee-name">{`${first_name} ${last_name}`}</td>
        <td className="table-data" data-cell="department">{department}</td>
        <td className="table-data" data-cell="asset-name">{name}</td>
        <td className="table-data" data-cell="type">{asset_type}</td>
        <td className="table-data" data-cell="serial">{serial_number}</td>
        <td className="table-data | lowercase italic" data-cell="status">{phone_number}</td>
        {/* Action Buttons */}
        <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
            <button
                className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
            <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
        </td>
        {/* End of Action Buttons */}
    </tr>
  )
}

export default RequestsTableDataRow

RequestsTableDataRow.propTypes = {
    request:PropTypes.object
}