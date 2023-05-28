import { useState } from "react";
import {XOctagon} from "react-bootstrap-icons";
import "./style.css";

const Modal = () => {
    const [isReg, setIsReg] = useState(false);

    const changeForm = (e) => {
        e.preventDefault();
        setIsReg(!isReg);
    }

    return <div className="modal-wrapper">
        <div className="modal">
            <button className="modal-close">
                <XOctagon/>
            </button>
            <h3>{isReg ? "Регистрация" : "Вход"}</h3>
           <form>
                {isReg && <input type="text" placeholder="Ваше имя"/>}
                <input type="email" placeholder="Ваш электронный адрес"/>
                <input type="password" placeholder="Ваш пароль"/>
                {isReg && <input type="password" placeholder="Повторите пароль"/>}
                <button type="submit">
                    {isReg ? "Зарегистрироваться" : "Войти"}
                </button>
                <a className="modal-link" onClick={changeForm}>
                    {isReg ? "Войти" : "Зарегистрироваться"}
                </a>
           </form>
        </div>
    </div>
}

export default Modal;