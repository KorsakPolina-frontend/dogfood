import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {SuitHeart, SuitHeartFill} from "react-bootstrap-icons";
import {Card, Button} from "react-bootstrap";
import Ctx from "../../ctx";

const BsCard = ({
    discount,
    likes,
    name,
    pictures,
    price,
    tags,
    _id

}) => {
    const {setBaseData, userId, api, basket, setBasket} =useContext(Ctx);
    const [isLike, setIsLike] = useState(likes.includes(userId));
    const [likeFlag, setLikeFlag] = useState(false);
    const inBasket = basket.filter(el => _id === el.id).length > 0;

    const likeHendler = () => {
        setIsLike(!isLike);
        setLikeFlag(true);
    }   
    useEffect(() => {
        if (likeFlag) {
        api.setLike(_id, isLike)
        .then(data => {
            console.log(data);
            setLikeFlag(false);
            //setBaseData((old) => old.map(el => el._id === data._id ? data : el))
            api.getProducts()
            .then(newData => {
                setBaseData(newData.products);
            })
        })
    }
    }, [isLike])

    const addToBasket = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setBasket(prev => [...prev, {
            id: _id,
            price,
            discount,
            cnt: 1
        }])
    }


    return <Card className="pt-3 h-100" id={"pro_" + _id}>
        {userId 
        && <span className="card-like" onClick={likeHendler}>
            {isLike ? <SuitHeartFill/> : <SuitHeart/>}
            </span>}
        <Card.Img variant="top" src={pictures} alt={name} className="align-self w-auto" width="100"/>
        <Card.Body className="d-flex flex-column position-relative"
        >
            <Card.Title as="h4">{price} ₽</Card.Title>
            <Card.Text className="text-secondary fs-5 flex-grow-1">{name}</Card.Text>
            <Button 
            variant="warning" 
            className="w-100 position-relative"
            disabled={inBasket} 
            onClick={addToBasket}
            style={{zIndex: "1"}}
            >Купить</Button>
        </Card.Body>
        <Link to={`/product/${_id}`} className="card-link"></Link>
    </Card>
}
export default BsCard;

/*
 return <div className="card pt-2" id={"pro_" + _id}>
        <span className="card-like" onClick={likeHendler}>{isLike ? <SuitHeartFill/> : <SuitHeart/>}</span>
        <img src={pictures} alt={name} className="card-img-top align-self w-auto" height="100"/>
        <div className="card-body d-flex flex-column">
            <h4>{price} ₽</h4>
            <p className="text-secondary fs-5 flex-grow-1">{name}</p>
            <button className="btn btn-warning w-100">Купить</button>
        </div>
        <Link to={`/product/${_id}`} className="card-link"></Link>
    </div>


*/