import React, { useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
// import { useNavigate } from "react-router-dom";

export default function Dish(props) {
    const [id, setId] = useState()
    const del = () => {
        axios.delete(`http://127.0.0.1:8000/delete_dish/${id}`)
    }
    del()
    return (<div style={{ display: "table-cell" }} className="list  offset-3">
        {props.dish && props.dish.map(p => {
            return (<div class="card col-md-3 mb-3" style={{ width: "18rem" }}>
                <h5>{p.name}</h5>
                <img class="card-img-top" src={require(`../asets/minu.jpg`)} alt="Card image cap" />
                <div class="card-body">
                    <p class="card-text">{p.desc}</p>
                </div>
                <div className="btn btn-outline-primary" name={p.id} onClick={() => setId(p.id)} data-bs-toggle="button">
                    delete
                </div>
            </div>)
        })}

    </div>)
}
