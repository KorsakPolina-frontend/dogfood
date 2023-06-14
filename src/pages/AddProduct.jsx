import { useState } from "react"; 
import { Container, Row, Col, Form, FormGroup, FormLabel } from "react-bootstrap";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("https://w7.pngwing.com/pngs/929/280/png-transparent-dog-logo-pet-kennel-club-bone-dog-mammal-animals-cat-like-mammal.png");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState(""); //cnt
    const [description, setDescription] = useState("");
    const [discout, setDiscout] = useState("");
    const [wight, setWight] = useState("");
    const [tagWord, setTagWord] = useState(""); //слово для массива с тегами
    const [tags, setTags] = useState(["df"]); //массив с тегами. по тегу Df мы будем 
    //сортировать только наши товары с собачей темой.
    return <Container style={{gridTemplateColumns: "auto"}}>
        <Row>
            <Col xs={12}><h1>Добавить новый товар</h1></Col>
            <Form>
               <Form.Group>
                    <Form.Label htmlFor="name">Название товара</Form.Label>
                    <Form.Control 
                    id="pro-name" 
                    type="text" 
                    value={} 
                    onChange={e => {set(e.target.value)}}
                    />
                </Form.Group> 
            </Form>
        </Row>
    </Container>
}

export default AddProduct;