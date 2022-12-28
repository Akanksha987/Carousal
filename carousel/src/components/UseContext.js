import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import UseState from "./UseState";
function UseContext(){
  const line=`This is made by Kalvium`
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }
  return(
    <div style={themeStyle}>
      <UseState line={line}/>
    </div>
  )
}
export default UseContext;