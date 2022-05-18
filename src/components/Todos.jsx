import React from 'react'
import { useState } from 'react'
import './todos.css'
export const Todos = () => {
  const [track, setTrack] = useState();
  const [data, setData] = useState([]);
  return (
    <div>
        <div className="container">
            {data.map((e)=><p>{e}</p>)}
          <div className="input">
          <input type="text" placeholder="Write Something" onChange={(e) => {
          setTrack(e.target.value);
        }}></input>
            <button onClick={()=>{setData([...data, track])}}>
                <h2>+</h2>
                </button>

          </div>
        </div>
    </div>
  )
}



