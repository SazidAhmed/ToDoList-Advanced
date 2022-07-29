import { useState } from 'react';
import { FaRegCheckCircle, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function CopyTable() {

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), name: '', email: '', works_on_saturday:'' },
  ]);

  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
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

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
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
        </div>
    </>
  );
}

export default CopyTable;
