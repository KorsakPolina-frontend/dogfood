import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {SuitHeart, SuitHeartFill} from "react-bootstrap-icons"
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
    _id,
    user,
    setBaseData
}) => {
    const [isLike, setIsLike] = useState(likes.includes(user));
    const likeHendler = () => {
        setIsLike(!isLike);
        setBaseData((old) => old.map(el => {
            if (el._id === _id) {
               isLike 
               ? el.likes = el.likes.filter(lk => lk !== user)
               : el.likes.push(user);
            }
            return el;
        }))
    }
    
    return <div className="card-lite" id={"pro_" + _id}>
        <span className="card-like" onClick={likeHendler}>{isLike ? <SuitHeartFill/> : <SuitHeart/>}</span>
        <img src={pictures} alt={name}/>
        <h4>{price} ₽</h4>
        <p>{name}</p>
        <button>Купить</button>
        <Link to={`/product/${_id}`} className="card-link"></Link>
    </div>
}
export default Card;