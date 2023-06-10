import { useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";

//const Card = (props) => {
//    return <div className="card-lite">
//        <img src={props.img} alt={props.name}/>
 //       <h4>{props.price} ₽</h4>
//        <p>{props.name}</p>
 //       <button>Купить</button>
 //   </div>
//}


const Card = ({
    discount,
    likes,
    name,
    pictures,
    price,
    tags,
    _id
}) => {
    return <div className="card-lite">
        <img src={pictures} alt={name}/>
        <h4>{price} ₽</h4>
        <p>{name}</p>
        <button>Купить</button>
        <Link to={`/product/${_id}`} className="card-link"></Link>
    </div>
}
export default Card;