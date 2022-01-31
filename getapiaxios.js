import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(" getting from ::::", res.data)
        setData(res.data)
      }).catch(err => console.log(err))
  }, []);

  const result = data.map((data, index) => {

    return (
      <tr>
        <td style={{border: '1px solid black'}}>  {data.id} </td>
        <td style={{border: '1px solid black'}}>  {data.title} </td>
        <td style={{border: '1px solid black'}}>  {data.body} </td>
      </tr>
    )
  })

  return (
    <div className="App">

      <h1> Apicall using axios </h1>


      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
       {result}

      </table>

    </div>
  );
}

export default App;
