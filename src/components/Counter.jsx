import React from 'react'
import { useState } from 'react'

export const Counter = () => {
    let [counter,setCounter] = useState(0)
    
    function incdnc(val){
        if(val === -1 && counter === 0){
            setCounter(0)
            return;
        }
         setCounter(counter+val)
         return;
    }
    function double(){
        setCounter(counter*2)
        return;
    }

  return (
    <div style={{height:"400px", width:"600px",margin:"50px auto"}} >
        <p style={{height:"40px", width:"40px",margin:"10px auto", paddingLeft:"15px",paddingTop:"10px",boxSizing:"border-box"}}
        className={`${counter % 2 == 0 ? "green" : "red"}`}>{counter}</p>
        <button onClick={()=>{incdnc(+1)}}>+</button>
        <button onClick={()=>{incdnc(-1)}}>-</button>
        <button onClick={()=>{double()}}>2x</button>
    </div>
  )
}
// 
// onClick={incdnc(+1)} onClick={incdnc(-1)} onClick={double()}