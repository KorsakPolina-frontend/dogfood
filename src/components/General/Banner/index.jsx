import "./style.css";
import { ChevronCompactRight } from "react-bootstrap-icons";

const Banner = () => <div className="banner">
    <h1>Крафтовые<br/>
        лакомства для<br/>
        собак</h1>
    <h3>Всегда свежие лакомства ручной<br/>
        работы с доставкой по России и Миру</h3>
    <button className="btn-catalog">Каталог<ChevronCompactRight/></button>
</div>

export default Banner;