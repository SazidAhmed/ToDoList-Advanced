import { useState, useEffect } from 'react';
import mondaySdk from "monday-sdk-js";
import { CopyToClipboard } from 'react-copy-to-clipboard';

function UserTable() {
  const [boardData, setBoardData] = useState(null);
  const [copied, setCopied] = useState('');

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
        setBoardData(res.data.boards[0].items)
      })
      .catch(err=>{
       console.log(err)
      })
  }

   return (
    <>
        <table className='table table-striped table-bordered table-hover'>
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                </tr>
            </thead>
            <tbody>
                { boardData && 
                boardData.map(data =>(
                <tr key={data.id}>
                    <CopyToClipboard text={data.name} onCopy={()=> setCopied(data.name)}><td>{data.name}</td></CopyToClipboard>
                    <CopyToClipboard text={data.column_values[1].text} onCopy={()=> setCopied(data.column_values[1].text)}><td>{data.column_values[1].text}</td></CopyToClipboard>
                    <CopyToClipboard text={data.column_values[2].text} onCopy={()=> setCopied(data.column_values[2].text)}><td>{data.column_values[2].text}</td></CopyToClipboard>
                </tr>
                ))
                }
            </tbody>
        </table>
        {copied 
        ? 
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Copied : </strong> {copied}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        : null}
    </>
  );
}

export default UserTable;
