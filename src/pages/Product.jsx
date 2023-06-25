import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {Button, Card, Stack} from "react-bootstrap";
import {Basket2, ArrowLeft, Truck} from "react-bootstrap-icons";
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
            <div style={{margin: "20px"}}>
                <Button variant="secondary"><ArrowLeft/><Link to={`/catalog#pro_${id}`}> Назад</Link></Button>
                {data?.author?._id === userId && <Button variant="outline-secondary"> <Basket2 onClick={delHandler}/></Button>}
            </div>
            <div className="container">
    {data.name 
        ? <>
            <h2>{data.name}</h2>
            <div className="product-img">
                <Card.Img variant="top" src={data.pictures} alt={data.name} style={{ width: '18rem' }}/>
                <div className="product-price">
                    <Card.Title>{data.price} ₽</Card.Title>
                    <Button variant="warning">В корзину</Button>
                    <Card border="primary" style={{ width: '100%', fontSize: '14px' }}>
                        <Card.Header><Truck/> Доставка по всему миру</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '12px' }}>Доставка курьером - от 300 ₽</Card.Title>
                            <Card.Title style={{ fontSize: '12px' }}>Доставка в пункт выдачи - от 150 ₽</Card.Title>
                        </Card.Body>
                    </Card>
                    <br />
                </div>
            </div>
            <div className="container">
                    <Card.Title style={{fontWeight: '700'}}>Описание</Card.Title>
                    <Card.Text style={{color: "black", fontSize: '16px'}}>{data.description}</Card.Text>
            </div>        
                
            
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