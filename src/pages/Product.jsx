import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import {Basket2, ArrowLeft, Truck, Plus} from "react-bootstrap-icons";
import Ctx from "../ctx";
import { Container, Row, Col, Table, Form } from "react-bootstrap";



const Product = () => {
    const { id } = useParams()
    const { api, userId, setBaseData } = useContext(Ctx);
    const [data, setData] = useState({});
    const [revText, setRevText] = useState("");
    const [revRating, setRevRating] = useState(0);
    const [hideForm, setHideForm] = useState(true);
    const navigate = useNavigate();
    
    const tabelInfo = [
        {
        name: "wight",
        text: "Вес"
        },
        {
        name: "author",
        text: "Продавец"
        },
        {
        name: "description",
        text: "Описание товара"
        },
]

    const addReview =(e) => {
        e.preventDefault();
        api.setReview(data._id, {
            text: revText,
            rating: revRating
        }).then(d => {
            setData(d);
            setRevText("");
            setRevRating(0);
            setHideForm(true);
        })
    }

    const delReview = (id) => {
        api.delReview(data._id, ).then(d => {
            setData(d);
        })
    }

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
    return <Container style={{gridTemplateColumns: "1fr"}}>
        <Row className="g-3">
            <Col>
                <Button variant="secondary"><ArrowLeft/><Link to={`/catalog#pro_${id}`}> Назад</Link></Button>
            </Col>
    
    {data.name 
        ? <>
            <Col xs={12}>
                <div>
                    {data.author?._id === userId && <Button variant="outline-secondary"><Basket2 onClick={delHandler}/></Button>}
                </div>
                <div className="py-4">
                    <h2>{data.name}</h2>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <img src={data.pictures} alt={data.name} className="w-75"/>
            </Col>
            <Col xs={12} md={6} className={`${data.discount ? "text-danger" : "text-secondary"} fw-bold fs-1`}>
                {Math.ceil(data.price * (100 - data.discount) / 100)} ₽
                <Button 
                    variant="warning" 
                    className="px-5" 
                    style={{ margin: ' 0 20px ' }} 
                >В корзину</Button>
                <Card border="primary" style={{ width: '75%', fontSize: '14px', margin: '20px 0' }}>
                        <Card.Header><Truck/> Доставка по всему миру</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '12px' }}>Доставка курьером - от 300 ₽</Card.Title>
                            <Card.Title style={{ fontSize: '12px' }}>Доставка в пункт выдачи - от 150 ₽</Card.Title>
                        </Card.Body>
                    </Card>
            </Col>       
            <Col xs={12}>
                <Table>
                    <tbody>
                        {tabelInfo.map((el, i) => <tr key={i}>
                            <th className="fw-normal text-secondary small w-25">{el.text}</th>
                            <td>{el.name === "author"
                            ? <>
                                <span className="me-3">Имя: {data[el.name].name}</span>
                                <span>Адрес: {data[el.name].email}</span>
                            </>
                            : data[el.name]
                            }</td>
                        </tr>)}
                    </tbody>
                </Table>
            </Col>
            {data.reviews.length > 0 ? <Col xs={12}>
                <h2>Отзывы</h2>
                <Row className="g-3">
                    {data.reviews.map(el => <Col xs={12} sm={6} md={4} key={el._id}>
                        <Card className="h-100">
                            <Card.Body>
                            <span className="d-flex w-100 align-items-center mb-2">
                                <span style={{
                                    widht: "30px",
                                    height: "30px",
                                    display: "block",
                                    background: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage: `url(${el.author.avatar})`,
                                    marginRight: "1rem",
                                    borderRadius: "50%"
                                }}></span>
                                <span>
                                    {el.author.name}
                                </span>
                            </span>
                            <Card.Title>{el.rating}</Card.Title>
                            <Card.Text className="fs-6 text-secondary">{el.text}</Card.Text>
                            {el.author._id === userId && <span className="text-danger position-absolute end-0 bottom-0 pe-3 pb-2">
                                <Basket2 onClick={() => delReview(el._id)}/>
                            </span>}
                            </Card.Body>
                        </Card>
                    </Col>
                    )}
                    { hideForm && <Col>
                        <Button variant="outline-warning" 
                        className="fs-1 w-100 h-100" 
                        onClick={() => setHideForm(false)}
                        >
                            <Plus />
                        </Button>
                    </Col>}
                </Row>
            </Col>
        : hideForm && <Col>
        <Button variant="outline-warning" 
        onClick={() => setHideForm(false)}
        >Написать отзыв</Button></Col>    
        }
        { !hideForm && <Col xs={12} className="mt-5">
            <h3>Новый отзыв</h3>
            <Form onSubmit={addReview}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="rating">Рeйтинг (0-5)</Form.Label>
                    <Form.Control type="number" 
                    min={1} max={5} 
                    step={1} 
                    id="rating" 
                    value={revRating} 
                    onChange={(e) => {setRevRating(+e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="text">Комментарий</Form.Label>
                    <Form.Control 
                    as="textarea"
                    type="text" 
                    id="text" 
                    value={revText} 
                    onChange={(e) => {setRevText(e.target.value)}}/>
                </Form.Group>
                <Button 
                type="reset" 
                className="me-2"
                onClick={(e) => {

                    setRevText("");
                    setRevRating(0);
                    setHideForm(true);
                }}
                >Отмена</Button>
                <Button type="sabmit">Добавить</Button>
            </Form>
        </Col>}
    </> 
        : <Col><div className="info" style={{textAlign: "center"}}> 
            Товара {id} не существует<br/>или<br/>он еще не загружен
          </div>
          </Col>
        }
        </Row>
    </Container>
}

export default Product;