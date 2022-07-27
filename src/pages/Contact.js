
import { FaRegCheckCircle } from 'react-icons/fa';

function DraggableTable() {

  return (
    <>
    <div className="container">
            <div className="row">
                <h5 className='mt-5'>Select Crews : </h5>
                <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-3">
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
                          <tr>
                              <td>Jhonny Doe</td>
                              <td>jhonny@gmail.com</td>
                              <td>Yes</td>
                          </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-3">
                  
                </div>
            </div>
            <div className="row">
                <div className="d-flex ">
                    <button type="button" className="btn btn-success"><FaRegCheckCircle /> Success</button>
                </div>
            </div>
        </div>
    </>
  );
}

export default DraggableTable;
