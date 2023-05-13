import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [search, setSearch] = useState(''); 

  const getData = (e) => {
e.preventDefault()
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(
      response => response.json()).then((res) => console.log("linguuuuuu",res))
      .catch((err) => console.log(err))
    
    console.log("lingu")
    console.log(search)
  };

  return (
    <div>
      <p>hiiiujjji</p>
      {/* {Array.isArray(data) && data.map((item) => <li>{item.text}</li>)} */}
      <form onSubmit={getData}>
<input type="text" value={search} onChange={(e) => { setSearch(e.target.value)}}/>
      <input type="submit"/>
      </form>
    </div>
  );
}
