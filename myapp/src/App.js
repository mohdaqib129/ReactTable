import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([]);
  const [fetchingData,setFetchingData] = useState(true);
  const [value1,setValue1] = useState("");
  const [value2,setValue2] = useState("");
  const [value3,setValue3] = useState("");
  const [value4,setValue4] = useState("");

  const [fillteredData,setFillteredData] = useState([...data]);


  useEffect(()=> {
    const fetchData = async ()=> {
      await fetch(
        "https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((json) => {
                    setData(json)
                    setFetchingData(false);
                    setFillteredData(json);
                })
    }
    fetchData();
  },[]);


  const setFilter1 = (e) => {
    if(e.target.value !== ""){
      setValue1(e.target.value);
      const filteredTable = data.filter((id)=>id.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setFillteredData([...filteredTable]);
    }else {
      setValue1(e.target.value);
      setFillteredData([...data])
    }
  }
  const setFilter2 = (e) => {
    if(e.target.value !== ""){
      setValue2(e.target.value);
      const filteredTable = data.filter((id)=>id.username.toLowerCase().includes(e.target.value.toLowerCase()))
      setFillteredData([...filteredTable]);
    }else {
      setValue2(e.target.value);
      setFillteredData([...data])
    }
  }
  const setFilter3 = (e) => {
    if(e.target.value !== ""){
      setValue3(e.target.value);
      const filteredTable = data.filter((id)=>id.phone.toLowerCase().includes(e.target.value.toLowerCase()))
      setFillteredData([...filteredTable]);
    }else {
      setValue3(e.target.value);
      setFillteredData([...data])
    }
  }
  const setFilter4 = (e) => {
    if(e.target.value !== ""){
      setValue4(e.target.value);
      const filteredTable = data.filter((id)=>id.email.toLowerCase().includes(e.target.value.toLowerCase()))
      setFillteredData([...filteredTable]);
    }else {
      setValue4(e.target.value);
      setFillteredData([...data])
    }
  }


  return (
    <div className="App">
      <input type="text" placeholder='Search Name' value={value1} onChange={setFilter1}/>
      <input type="text" placeholder='Search UserName' value={value2} onChange={setFilter2}/>
      <input type="number" placeholder='Search number' value={value3} onChange={setFilter3}/>
      <input type="text" placeholder='Search email' value={value4} onChange={setFilter4}/>
      {console.log(fillteredData)}
      {fetchingData ? <h1>data Loading ....</h1> :
      <table className='table'>
        <thead>
          <tr><th>Name</th>
          <th>UserName</th>
          <th>Phone</th>
          <th>Email</th></tr>
        </thead>
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
