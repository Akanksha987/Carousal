import React, { useEffect } from "react";
import  { useState } from "react";
import "../App.css"

function UseState(props){
  const [state, setState] = useState(" ");
  const [like,setLike] = useState(0);
  const handleState=()=>{
    setState(state=>state===" "?props.line:" ")
  }
  const handleLike = ()=>{
    setLike(like=>like+1)
  }
  useEffect(()=>{
    alert(`Context Button Clicked`)
  },[state])
  return (
    <div>
      <h3>{state}</h3>
      <button onClick={handleState}>Content</button>
      <h3>{like}</h3>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default UseState;