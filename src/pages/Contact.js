import { useState } from 'react';
import { FaRegCheckCircle, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { CopyToClipboard } from 'react-copy-to-clipboard';

//components 
import DataTable from '../components/reUsable/Table';

function CopyTable() {

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), name: '', email: '', works_on_saturday:'' },
  ]);

  const [copied, setCopied] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const localData = localStorage.getItem('appData');
    if(localData !== null){
      var existingData = JSON.parse(localData);
      const newData = existingData.concat(inputFields)
      localStorage.setItem('appData', JSON.stringify(newData));
    }else{
      localStorage.setItem('appData', JSON.stringify(inputFields));
    }
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), name: '', email: '', works_on_saturday:'' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  
  return (
    <div className="container-fluid">
      <div className="row">
        <h5 className='mt-5'>Click to copy and paste to the input field : </h5>
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
                    <CopyToClipboard text={'Jhone Doe'} onCopy={()=> setCopied('Jhone Doe')}><td>Jhon Doe</td></CopyToClipboard>
                    <CopyToClipboard text={'jhon@gmail.com'} onCopy={()=> setCopied('jhon@gmail.com')}><td>jhon@gmail.com</td></CopyToClipboard>
                    <CopyToClipboard text={'No'} onCopy={()=> setCopied('No')}><td>No</td></CopyToClipboard>
                  </tr>
                  <tr>
                    <CopyToClipboard text={'Jhonny Doe'} onCopy={()=> setCopied('Jhonny Doe')}><td>Jhonny Doe</td></CopyToClipboard>
                    <CopyToClipboard text={'jhonny@gmail.com'} onCopy={()=> setCopied('jhonny@gmail.com')}><td>jhonny@gmail.com</td></CopyToClipboard>
                    <CopyToClipboard text={'Yes'} onCopy={()=> setCopied('Yes')}><td>Yes</td></CopyToClipboard>
                  </tr>
                </tbody>
            </table>
            {copied ? <span style={{color : 'green'}}>Copied : {copied}</span>: null}
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
              <div className="row">
              <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <h6>Name</h6>
              </div>
              <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <h6>Email</h6>
              </div>
              <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <h6>Work on Saturday</h6>
              </div>
            </div>
          <form onSubmit={handleSubmit}>
          { inputFields.map(inputField => (
            <div className="row mt-1"  key={inputField.id}>
              <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <input type="text" name='name' className="form-control" placeholder='Name' aria-describedby="name" 
                value={inputField.name}
                onChange={event => handleChangeInput(inputField.id, event)}
                />
              </div>
              <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <input type="text" name='email' className="form-control" placeholder='Email' aria-describedby="email" 
                value={inputField.email}
                onChange={event => handleChangeInput(inputField.id, event)}
                />
              </div>
              <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="d-flex ">
                <input type="text" name='works_on_saturday' className="form-control" placeholder='Works on Saturday' aria-describedby="wos"
                value={inputField.works_on_saturday}
                onChange={event => handleChangeInput(inputField.id, event)}
                />
                <span className='m-1 danger' role="button" disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}><FaTrashAlt color='red'/></span>
                </div>
              </div>
            </div>
            )) }
              <div className="mt-2">
                <button type="button" className="btn btn-primary m-1" onClick={handleAddFields}>Add More <FaPlus /></button>
                <button type="button" className="btn btn-success" onClick={handleSubmit}> Submit <FaRegCheckCircle /></button>
              </div>
          </form>
        </div>
      </div>
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
              {copied ? <span style={{color : 'green'}}>Copied : </span>: null}
          </div>
        </div>
    </div>
  );
}

export default CopyTable;
