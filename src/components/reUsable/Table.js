import { useState, useEffect } from 'react';

const DataTable = ({ tableData }) => {
  return ( 
    <div className="blog-list">
      <table className='table table-striped table-bordered table-hover'>
        <thead>
            <tr>
              <th>Crew</th>
              <th>Email</th>
              <th>Work On Saturday</th>
            </tr>
        </thead>
        <tbody>
          {tableData.map((data)=>(
            <tr>
              <td>Jhon Doe</td>
              <td>jhon@gmail.com</td>
              <td>No</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
