import React, { useState, useEffect } from "react";
import axios from "axios";


const Filter = () => {
  const [cats, setCat] = useState();
  const [val, setVal] = useState();

  useEffect(() => {
    const getData = async () => {
      const catigories = await axios.get("http://127.0.0.1:8000/dishes");
      setCat(catigories.data);
    };
    getData();
  }, []);



  const handlechange = (e) => {
    setVal(e.target.value)
  }

  return (<div><br /><br /><br />
    <select onChange={handlechange}>
      <option selected hidden>choose categorie</option>
      <option value="breakfast">breakfast</option>
      <option value="lunch">lunch</option>
      <option value="desserts">desserts</option>
      <option value="diner">diner</option>
    </select><br /><br />
    {cats && cats.filter(p => p.cat === val).map(d => {
      return (<div class="card" style={{ width: "18rem" }}>
        <h5>{d.name}</h5>
        <img class="card-img-top" src={require(`../asets/minu.jpg`)} alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">{d.desc}</p>
        </div>
      </div>)
    })}
  </div>)
}

export default Filter