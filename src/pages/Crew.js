import { useState, useEffect } from 'react';

//components 
import CrewTable from '../components/crew/CrewTable';

function Crews() {

  const [crewData, setCrewData] = useState(null);
  const [noData, setNoData] = useState(false);

  //Get data from local storage to display on the table
  const getCrewData = async ()=>{
    const crewData = localStorage.getItem('appData');

    if(crewData == null){
      console.log('No Data')
      setNoData(true)
      return false
    }

    const existingData = await JSON.parse(crewData);
    setCrewData(existingData);
  }

   //Hook
   useEffect(()=>{
    getCrewData()
  }, []);
  
  return (
    <div className="container-fluid">
      <div className="row">
          <h5 className='mt-2'>Crew Data Table : </h5>
          <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-3">
              <table className='table table-striped table-bordered table-hover'>
                { crewData &&
                  <thead>
                      <tr>
                          <th>Crew</th>
                          <th>Email</th>
                          <th>Work On Saturday</th>
                      </tr>
                  </thead>
                  }
                  <tbody>
                  { crewData &&
                    crewData.map(data =>(
                    <tr key={data.id}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.works_on_saturday}</td>
                    </tr>
                      ))
                    }
                  </tbody>
              </table>
              {noData &&
              <div className="alert alert-success fade show" role="alert">
                <strong>No data found</strong>
              </div>
              }
          </div>
        </div>
    </div>
  );
}

export default Crews;
