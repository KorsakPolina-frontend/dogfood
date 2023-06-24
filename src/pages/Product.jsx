import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {Card} from "react-bootstrap";
import Ctx from "../ctx";

const Product = () => {
    const { id } = useParams()
    const { api } = useContext(Ctx);
    const [data, setData] = useState({});

    useEffect(() => {
    api.getSingleProduct(id)
        .then(serverData => {
            console.log(id, serverData);
            setData(serverData);
        })
    }, [])
    return <>
    <Link to={`/catalog#pro_${id}`}>Назад</Link>
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
    </>
}

export default Product;