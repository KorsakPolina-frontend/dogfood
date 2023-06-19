import { Link } from "react-router-dom";
import { Journals } from "react-bootstrap-icons";
import {Button} from "react-bootstrap";
//import { Col, Button} from "react-bootstrap";

const Home = ({user, setActive}) => {
    return <>
        <div className="info">
            <div>
                <div className="home-conteiner">
                        <h1>Крафтовые
                            <br/>лакомства для собак</h1>
                        <p>Всегда свежие лакомства ручной работы<br/> с доставкой по России и Миру</p>
                    
                        <Button variant="light">
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
                            <div className="home-text">
                            <h1>Подарок за<br/> первый заказ!</h1>
                            <p>Лакомство тренировочное для собак</p>
                            </div>
                            <img src="https://4lapy.ru/resize/480x480/upload/iblock/0bb/0bb1206b90e1327a87c729f68e91d6ce.jpg" className="home-img"></img>
                </div>
            </div>
         </div> 
         <div className="home-info">
         <div className="home-text-info">
            <h1>Наборы</h1>
            <p>для дрессировки</p>
            <img src="https://yanashla.com/wp-content/uploads/2021/08/treats-3164687_1920-1024x738.jpg" className="home-img"></img>
         </div>
         <div className="home-text-promo">
            <h1>Шампуни</h1>
            <p>для вашего питомца</p>
            <img src="https://green-buddy.ru/wp-content/uploads/2019/05/GB-500ml-3.jpg" className="home-img"></img>
         </div>
         </div>
    </>
}

export default Home;