import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import {Basket2, ArrowLeft} from "react-bootstrap-icons";
import Ctx from "../ctx";

const Product = () => {
    const { id } = useParams()
    const { api, userId, setBaseData } = useContext(Ctx);
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
    api.getSingleProduct(id)
        .then(serverData => {
            console.log(id, serverData);
            setData(serverData);
        })
    }, [])

    const delHandler = () => {
        api.delSingleProduct(id)
            .then(data => {
                console.log(data)
                setBaseData(prev => prev.filter(el => el._id !== id));
                navigate("/catalog");
            })
    }
    return <div className="d-flex justify-content-around container">
        <Card>
            <div className="d-grid gap-2">
                <Button variant="secondary"><ArrowLeft/><Link to={`/catalog#pro_${id}`}> Назад</Link></Button>
                {data?.author?._id === userId && <Button variant="outline-secondary"> <Basket2 onClick={delHandler}/></Button>}
            </div>
            <div className="container">
    {data.name 
        ? <>
            <h1>{data.name}</h1>
            <Card.Img variant="top" src={data.pictures} alt={data.name}/>
                <Card.Body>
                <Card.Title>{data.price} ₽</Card.Title>
                 <Button variant="warning">В корзину</Button>
                    <Card.Title>Описание</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                    
                </Card.Body>
            
          </> 
        : <div className="info" style={{textAlign: "center"}}> 
            Товара {id} не существует<br/>или<br/>он еще не загружен
          </div>
        }
        </div>
        </Card>
    </div>
    
}

export default Product;
/*
return <div className="d-flex justify-content-around">
    <Link to={`/catalog#pro_${id}`}>Назад</Link>
    <div>
        {data?.author?._id === userId && <Basket2 onClick={delHandler}/>}
    </div>
    {data.name 
        ? <>
            <h1>{data.name}</h1>
            <img src={data.pictures} alt={data.name}/>
            <Card style={{width: "18rem"}}>
                <Card.Body>
                    <Card.Title>Описание</Card.Title>
                    <Card.Text>Скоро здесь будет текст</Card.Text>
                </Card.Body>
            </Card>
          </> 
        : <div className="info" style={{textAlign: "center"}}> 
            Товара {id} не существует<br/>или<br/>он еще не загружен
          </div>
        }
    </div>
    */