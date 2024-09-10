import React, { useState } from 'react';
import '../index.css';
import { Mealcards } from './Mealcards';

const Mainpage = () => {
  const [data, setData] = useState(null);
  const [Value, setValue] = useState("");
  const [msg, setMsg] = useState("");

  const Func = async () => {
    if(Value == ""){
      setMsg("Please Enter Something To Proceed")
    }else{
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Value}`);
      const jsonData = await get.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals);
      setMsg("");
    }

  };
  // console.log(data);

  return (
    <div className="container">
      <h1 className='head'>Food Recipe App</h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Enter" 
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={Func}>Search</button>
      </div>
      <h3 className='head'>{msg}</h3>
      <div>
        <Mealcards detail={data}/>
      </div>
    </div>
  );
};

export default Mainpage;



