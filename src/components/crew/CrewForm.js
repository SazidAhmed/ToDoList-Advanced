import { useState } from 'react';
import { FaRegCheckCircle, FaPlus, FaUndo, FaTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

//components 
function CrewForm() {

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), name: '', email: '', works_on_saturday:'' },
  ]);

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
    setInputFields([{ id: uuidv4(), name: '', email: '', works_on_saturday:'' }])
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

  const handleRefresh = () => {
    setInputFields([{ id: uuidv4(), name: '', email: '', works_on_saturday:'' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <>
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
            <button type="button" className="btn btn-primary" onClick={handleAddFields}>Add More <FaPlus /></button>
            <button type="button" className="btn btn-success m-1" onClick={handleSubmit}> Submit <FaRegCheckCircle /></button>
            <button type="button" className="btn btn-danger" onClick={handleRefresh}> Undo All <FaUndo /></button>
            </div>
        </form>
    </>
  );
}

export default CrewForm;
