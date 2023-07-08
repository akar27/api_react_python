import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddDish = (e) => {
  const [data, setData] = useState()
  const navigate = useNavigate()


  const handleChange = (event) => {
    setData({
      ...data,
      [event.name]: event.value
    });
  }
  console.log(data)


  const adddish = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/adddish', data
    ).then(navigate("/dishes"))

  }
  console.log(data)
  
  return (<div className="con" style={{color:"white"}}>
    <br /><br /><br /><br /><form onSubmit={adddish}>

      <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg"  >nom</label>
      <div className="col-sm-10">
        <input type="text" className="form-control form-control-lg" name='name' onChange={(e) => handleChange(e.target)} />
      </div><br />
      <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg" >image</label>
      <div className="col-sm-10">
        <input type="text" className="form-control form-control-lg" name='image' onChange={(e) => handleChange(e.target)} />
      </div><br />
      <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg" >desc</label>
      <div className="col-sm-10">
        <input type="text" className="form-control form-control-lg" name="desc" onChange={(e) => handleChange(e.target)} />
      </div><br />
      <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg" >steps</label>
      <div className="col-sm-10">
        <input type="text" className="form-control form-control-lg" name='steps' onChange={(e) => handleChange(e.target)} />
      </div><br />
      <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg" >category</label>
      <div className="col-sm-10">
        <select className="form-control form-control-lg" name='cat' required onChange={(e) => handleChange(e.target)}>
          <option selected hidden>choose categorie</option>
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="desserts">desserts</option>
          <option value="diner">diner</option>
        </select>
      </div><br />
      <div className="col-sm-10">
        <input type="submit" className="form-control form-control-lg" id="colFormLabelLg" />
      </div>
    </form>
  </div>);
}

export default AddDish
