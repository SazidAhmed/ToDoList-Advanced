
import { FaRegCheckCircle, FaPlus } from 'react-icons/fa';

function DraggableTable() {

  return (
    <>
    <div className="container">
            <div className="row">
                <h5 className='mt-5'>Click to copy and paste to the input field : </h5>
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
                <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <form>
                    <div className="row">
                      <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="name" />
                      </div>
                      <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" aria-describedby="email" />
                      </div>
                      <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <label for="wos" class="form-label">Work On Saturday</label>
                        <input type="text" class="form-control" id="wos" aria-describedby="wos" />
                      </div>
                    </div>
                  </form>
                  <div className="row">
                      <div className="d-flex mt-3">
                          <button type="button" className="btn btn-success"><FaPlus /> Add More</button>
                          <button type="button" className="btn btn-success"><FaRegCheckCircle /> Done</button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default DraggableTable;
