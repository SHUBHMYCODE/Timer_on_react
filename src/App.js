import React, { useEffect, useState } from "react";
import "./App.css";
const App = ()  => {
  const [ctime, setctime] = useState(new Date().toLocaleTimeString());
useEffect(() => {
  const timer = setInterval(() => {
      setctime(new Date().toLocaleTimeString())
    }, 1000)
  return () => {
    if(timer) clearInterval(timer)
  }
  }, []) 

  const updateTime =() => {
    let time = new Date().toLocaleTimeString();
     setctime(time); 
 
  };
 
return(

  <>
    <h1 className="modle"> {ctime} </h1>
    <button onClick={updateTime} > Gettime </button>
    </>
);
}
export default App;