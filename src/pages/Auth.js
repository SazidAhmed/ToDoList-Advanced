import { useState, useEffect } from 'react';

function Auth() {
  const [authKey, setAuthKey] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const url = '/v2'
  const mondayAuthToken = process.env.REACT_APP_API_KEY

  let query =`
  {
    boards () {
      id      
      name
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
          'Authorization' : authKey
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
        console.log(res)
        isAuth(true)
      })
      .catch(err=>{
       console.log(err)
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(authKey);
    localStorage.setItem('mondayAuthKey', JSON.stringify(authKey));
    setAuthKey('')
  }
  
  return (
    <div className="container-fluid">
      <div className="row">
        <h5 className='mt-5'>Insert your monday API Authentication key : </h5>
        <div className="col col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 p-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="authKey" className="form-label">Monday API Authentication Key : </label>
                <input type="text" className="form-control" id="authKey" name='authKey' 
                value={authKey} onChange={(e) => setAuthKey(e.target.value)} placeholder="Enter Your Monday API Authentication Key Here" aria-describedby="emailHelp" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
          
        </div>
      </div>
    </div>
  );
}

export default Auth;
