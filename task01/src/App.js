
import { useState } from 'react';
import './App.css';
import UserCard from './component/UserCard';

function App() {
  const [isloading, setIsloading] = useState(false)
  const [apidata, setApidata] = useState([])

  async function getData() {
    setIsloading(true)
    const res = await fetch("https://reqres.in/api/users?page=1")
    const data = await res.json()
    Promise.all([
      setApidata(data.data),
      setIsloading(false)
    ])
  }


  return (
    <div className="app">
      <nav>
        <div className="logo">
          Demo
        </div>
        <button className="btn" onClick={getData} type='button' disabled={apidata.length}>Call Users</button>
      </nav>
      <>
        {
          apidata.length === 0 ? (
            <h2>No Users Found...</h2>
          ) : (null)
        }
        {
          isloading ? (
            <div className="loader"></div>
          ) : (
            <UserCard apidata={apidata} />
          )
        }
      </>
    </div>

  );
}

export default App;
