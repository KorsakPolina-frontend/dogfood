import { useState } from "react";
import {XOctagon} from "react-bootstrap-icons";
import "./style.css";

const Modal = () => {
    const [isReg, setIsReg] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");

    const changeForm = (e) => {
        e.preventDefault();
        setIsReg(!isReg);
        clearForm();
    }
    const clearForm = () => {
        setName("");
        setEmail("");
        setPwd("");
        setPwd2("");
    }
    const handleForm = (e) => {
        e.preventDefault();
        const body = {
            email: email,
            password: pwd
        }
        if (isReg) {
            body.name = name
        }
        console.log(body)
    }
    return <div className="modal-wrapper">
        <div className="modal">
            <button className="modal-close">
                <XOctagon/>
            </button>
            <h3>{isReg ? "Регистрация" : "Вход"}</h3>
           <form onSubmit={handleForm}>
                {isReg && <input 
                type="text" 
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />}
                <input 
                type="email" 
                placeholder="Ваш электронный адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="Ваш пароль"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                />
                {isReg && <input 
                type="password" 
                placeholder="Повторите пароль"
                value={pwd2}
                onChange={(e) => setPwd2(e.target.value)}
                />}
                <div className="modal-btns">
                    <button type="submit" disabled={isReg && (!pwd || pwd !== pwd2)}>
                        {isReg ? "Зарегистрироваться" : "Войти"}
                    </button>
                    <a className="modal-link" onClick={changeForm}>
                        {isReg ? "Войти" : "Зарегистрироваться"}
                    </a>
                </div>
           </form>
        </div>
    </div>
}

export default Modal;

/* сайт с API https://api.react-learning.ru/api-docs/*/