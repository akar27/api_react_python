import React, { useEffect, useState } from "react";
import Dish from "./dish";


const Blog = () => {
  const [dish, setDishes] = useState();
  
  useEffect(() => {
    const getData = async () => {
      await fetch("http://127.0.0.1:8000/dishes")
      .then(res =>{return res.json()})
      .then((result) => {return setDishes(result)})}
      getData();
    
    },[dish])

  return (<div><br /><br /><br /><br />
    
    <Dish dish={dish} filtr={"non"}/>
  </div>)
}

export default Blog