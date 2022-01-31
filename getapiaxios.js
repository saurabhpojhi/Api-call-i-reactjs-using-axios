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
        <td>{data.id} </td>
        <td>{data.title} </td>
        <td>{data.body} </td>
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
