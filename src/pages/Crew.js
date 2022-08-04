import { useState, useEffect } from 'react';

//components 
import CrewTable from '../components/crew/CrewTable';
import UserTable from '../components/crew/UserTable';
import CrewForm from '../components/crew/CrewForm';

function Crews() {

  const [localStorageData, setLocalStorageData] = useState([]);

  //Get data from local storage to display on the table
  const getLocalData = ()=>{
    const localData = localStorage.getItem('appData');
    if(localData !== null){
      var existingData = JSON.parse(localData);
      setLocalStorageData(existingData);
      console.log('hook', localStorageData)
    }
  }

   //Hook
   useEffect(()=>{
    getLocalData()
  }, []);
  
  return (
    <div className="container-fluid">
      <div className="row">
          <h5 className='mt-2'>App Data Table : </h5>
          <div className="col col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 p-3">
              <table className='table table-striped table-bordered table-hover'>
                  <thead>
                      <tr>
                          <th>Crew</th>
                          <th>Email</th>
                          <th>Work On Saturday</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jhon Doe</td>
                      <td>jhon@gmail.com</td>
                      <td>No</td>
                    </tr>
                  </tbody>
              </table>
          </div>
        </div>
    </div>
  );
}

export default Crews;
