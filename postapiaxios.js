import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(" getting from ::::", res.data)
        setData(res.data)
      }).catch(err => console.log(err))
  }, []);

  const postData = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body
    }).then(res => console.log('posting data', res)).catch(err => console.log(err))
  }

  const result = data.map((data, index) => {

    return (
      <tr>
        <td style={{ border: '1px solid black' }}>  {data.id} </td>
        <td style={{ border: '1px solid black' }}>  {data.title} </td>
        <td style={{ border: '1px solid black' }}>  {data.body} </td>
      </tr>
    )
  })

  return (
    <div className="App">

      <h1> Apicall using axios </h1>

      <form>
        <lable> Title</lable>
        <input type="text" value={title} onchange={(e) => setTitle(e.target.value)} />
        <hr />

        <lable> Body</lable>
        <input type="text" value={title} onchange={(e) => setBody(e.target.value)} />
        <hr />
        <button onClick={postData}>  POST</button>
      </form>

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
