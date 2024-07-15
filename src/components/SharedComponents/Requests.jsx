const Requests = () => {
  return (
  <div className="admin-requests-table-wrapper | shadow text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800">
      <table className="admin-requests-table ">
        <caption className="table-caption | font-bold text-600 uppercase ">requests</caption>
        <tr className="table-headings | text-neutral-100 uppercase font-semibold ">
          <th className="table-heading">employee name</th>
          <th className="table-heading">department</th>
          <th className="table-heading">asset name</th>
          <th className="table-heading">type</th>
          <th className="table-heading">serial</th>
          <th className="table-heading">phone no.</th>
          <th className="table-heading"></th>
        </tr>
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
        {/* ------------------ */}
        <tr className="table-row | text-300 capitalize">          
          <td className="table-data" data-cell="employee-name">John Doe</td>           
          <td className="table-data" data-cell="department">human resource</td>                              
          <td className="table-data" data-cell="asset-name">HP Pavilion Laptop 16-ag0087nr</td>                              
          <td className="table-data" data-cell="type">laptop</td>                                   
          <td className="table-data" data-cell="serial">00000000</td>                                 
          <td className="table-data | lowercase italic" data-cell="status">254701010101</td>  
          {/* Action Buttons */}
          <td className="admin-requests-table-actions | flex table-data" data-cell="action-btns">
          <button className="text-green-600 dark:text-green-500 btn ghost-btn text-300 font-bold capitalize">accept</button>
          <button className="text-red-500 btn ghost-btn text-300 font-bold capitalize">deny</button>
          </td>
          {/* End of Action Buttons */}
        </tr>
        {/* ------------------ */}
      </table>
    </div>
  )
}

export default Requests