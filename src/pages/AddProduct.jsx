import { useState } from "react"; 
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("https://w7.pngwing.com/pngs/929/280/png-transparent-dog-logo-pet-kennel-club-bone-dog-mammal-animals-cat-like-mammal.png");
    const [price, setPrice] = useState(999);
    const [stock, setStock] = useState(20); //cnt
    const [description, setDescription] = useState("Скоро здесь будет текст...");
    const [discout, setDiscout] = useState(0);
    const [wight, setWight] = useState("0 г");
    const [tagWord, setTagWord] = useState(""); //слово для массива с тегами
    const [tags, setTags] = useState(["df"]); //массив с тегами. по тегу Df мы будем 
    //сортировать только наши товары с собачей темой.

    const tagsHandler = (e) => {
        const val = e.target.value;
        const last = val[val.length - 1];

       if (/\s/.test(last)) {
            const word = val.slice(0, val.length - 1);
            const test = tags.filter(tg => tg.toLowerCase() === word.toLowerCase());
            
            if (!test.length) {
                setTags(prev => [...prev, word]);
            }
            setTagWord("");
        } else {
            setTagWord(val);
        }
    }
    const clearForm = () => {
        setName("");
        setLink("https://w7.pngwing.com/pngs/929/280/png-transparent-dog-logo-pet-kennel-club-bone-dog-mammal-animals-cat-like-mammal.png");
        setPrice(999);
        setStock(20);
        setWight("0 г");
        setDiscout(0);
        setDescription("Скоро здесь будет текст...");
        setTagWord("");
        setTags(["df"]);
    }
    const delTag = (e) => {
        const val = e.target.innerText;
        setTags(prev => prev.filter(tg => tg !==val));
    }
    const formHandler = (e) => {
        e.preventDefault();
        const body = {
            name: name,
            price: price,
            discout: discout,
            stock: stock,
            wight: wight,
            description: description,
            pictures: link,
            tags: tagWord && !tags.includes(tagWord) ? [...tags, tagWord] : tags
        };
        console.log(body);
    }
    return <Container style={{gridTemplateColumns: "auto"}}>
        <Row>
            <Col xs={12}><h1>Добавить новый товар</h1></Col>
            <Form onSubmit={formHandler}>
               <Form.Group>
                    <Form.Label htmlFor="pro-name">Название товара</Form.Label>
                    <Form.Control 
                    id="pro-name" 
                    type="text" 
                    value={name} 
                    onChange={e => {setName(e.target.value)}}
                    />
                </Form.Group> 
                <Form.Group>
                    <Form.Label htmlFor="pro-img">Ссылка на изображение</Form.Label>
                    <Form.Control 
                    id="pro-img" 
                    type="url" 
                    value={link} 
                    onChange={e => {setLink(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-price">Цена товара</Form.Label>
                    <Form.Control 
                    id="pro-price" 
                    type="number" 
                    value={price} 
                    step="10"
                    min="9"
                    max="29000"
                    onChange={e => {setPrice(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-stock">Количество на складе</Form.Label>
                    <Form.Control 
                    id="pro-stock" 
                    type="number" 
                    value={stock} 
                    min="0"
                    max="10000"
                    onChange={e => {setStock(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-w">Вес товара</Form.Label>
                    <Form.Control 
                    id="pro-w" 
                    type="text" 
                    value={wight} 
                    placeholder="100 г"
                    onChange={e => {setWight(e.target.value)}}
                    />
                    <Form.Text>Не забудте прописать еденицу измерения вместе с весом</Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-disc">Скидка</Form.Label>
                    <Form.Select 
                    id="pro-disc" 
                    type="number" 
                    value={discout} 
                    onChange={e => {setDiscout(e.target.value)}}
                    >
                        <option value={0}>Без скидки</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={20}>20%</option>
                        <option value={30}>30%</option>
                        <option value={50}>50%</option>
                        <option value={60}>60%</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-info"></Form.Label>
                    <Form.Control 
                    id="pro-info" 
                    type="text" 
                    value={description} 
                    as="textarea"
                    rows={4}
                    onChange={e => {setDescription(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="pro-tag">Добавить теги</Form.Label>
                    <Form.Control 
                    id="pro-tag" 
                    type="text" 
                    value={tagWord} 
                    onChange={tagsHandler}
                    />
                    <Form.Text>
                        {tags.map(tg => <Button 
                        key={tg} 
                        variant={tg === "df" ? "warning" : "secondary"} 
                        disabled={tg === "df"}
                        onClick={delTag}
                        >{tg}</Button>)}
                    </Form.Text>
                </Form.Group>
                <Button type="submit">Добавить товар</Button>
            </Form>
        </Row>
    </Container>
}

export default AddProduct;