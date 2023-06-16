import { Link } from "react-router-dom";
import { Journals } from "react-bootstrap-icons";
import {Button} from "react-bootstrap";
//import { Col, Button} from "react-bootstrap";

const Home = ({user, setActive}) => {
    return <div className="info">
        <div>
                <div className="home-conteiner">
                    <h1>Крафтовые лакомства для собак</h1>
                    <p>Всегда свежие лакомства ручной работы с доставкой по России и Миру</p>
                
                    <Button variant="warning">
                {user && <Link to="/catalog" className="info-link">
                    <Journals style={{marginRight: "10px"}}/>
                    Каталог товаров
                    </Link>}
                {!user && <>
                    <span className="info-link" onClick={() => setActive(true)}>Авторизуйтесь</span>,
                    чтобы получить доступ к сайту</>}
                    </Button>
                </div>
                <div className="home-promo">
                    <h1>Подарок за первый заказ!</h1>
                    <p>Лакомство тренировочное для собак</p>
                    <img src="https://4lapy.ru/resize/480x480/upload/iblock/0bb/0bb1206b90e1327a87c729f68e91d6ce.jpg" className="home-img"></img>
                </div>
        </div>
    </div> 
    
}

export default Home;