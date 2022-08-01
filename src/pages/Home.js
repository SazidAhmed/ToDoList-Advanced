import { useState, useEffect } from 'react';
import mondaySdk from "monday-sdk-js";
import { FaRegCheckCircle } from 'react-icons/fa';

function Home() {
  const [boardData, setBoardData] = useState(null);

  const monday = mondaySdk();
  const url = '/v2'
  const mondayAuthToken = process.env.REACT_APP_API_KEY

  let query =`
  {
    boards(ids: 2752311453) {
      items {
        id
        name
        column_values {
          id
          value
          title
          text
        }
      }
    }
  }
  `

  //Hook
  useEffect(()=>{
    getBoardData()
  }, []);

  const getBoardData = ()=>{
    fetch(url,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : mondayAuthToken
         },
         body: JSON.stringify({
           'query' : query
         })
        }
      )
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(JSON.stringify(res.data.boards[0].items, null, 2))
        setBoardData(res.data.boards[0].items)
      })
      .catch(err=>{
       console.log(err)
      })
  }

   return (
    <div className="container">
      <div className="row">
        <h5 className='mt-5'>Select Crews : </h5>
        <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-3">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    <b>Select All</b>
                </label>
            </div>
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Crew</th>
                        <th>Email</th>
                        <th>Work On Saturday</th>
                    </tr>
                </thead>
                <tbody>
                  { boardData && 
                  boardData.map(data =>(
                    <tr key={data.id}>
                      <td>
                          <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                      </td>
                      <td>{data.name}</td>
                      <td>{data.column_values[1].text}</td>
                      <td>{data.column_values[2].text}</td>
                  </tr>
                  ))
                  }
                </tbody>
            </table>
        </div>
      </div>
      <div className="row">
        <div className="d-flex ">
            <button type="button" className="btn btn-success"><FaRegCheckCircle /> Success</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
