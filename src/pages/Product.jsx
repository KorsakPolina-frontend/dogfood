import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {Card} from "react-bootstrap";
import {Basket2} from "react-bootstrap-icons";
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
    return <>
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
    </>
}

export default Product;