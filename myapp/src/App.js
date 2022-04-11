import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);
  const [fetchingData,setFetchingData] = useState(true);
  const [value,setValue] = useState("");
  const [fillteredData,setFillteredData] = useState([]);

  const fetchData = async ()=> {
    await fetch(
      "https://jsonplaceholder.typicode.com/users")
              .then((res) => res.json())
              .then((json) => {
                  setData([...json])
                  setFetchingData(false);
              })
  }

  useEffect(()=>{
    fetchData();
    setFillteredData(data);
  },[]);


  const filter = (e) => {
    if(e.target.value !== ""){
      setValue(e.target.value);
      const filteredTable = data.filter((id)=>id.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setFillteredData([...filteredTable]);
    }else {
      setValue(e.target.value);
      setFillteredData([...data])
    }

  }


  return (
    <div className="App">
      <input type="text" placeholder='Enter Name' value={value} onChange={filter}/>
      {fetchingData ? <h1>data Loading ....</h1> :
      <table>
        <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        <tbody>
          {fillteredData.map((id)=>(
          <tr>
          <td>{id.name}</td>
          <td>{id.username}</td>
          <td>{id.phone}</td>
          <td>{id.email}</td>
        </tr>)
          )}
        </tbody>
      </table>}
    </div>
  );
}

export default App;
