import Logo from "./Logo";
import {
    BalloonHeart,
    Cart4,
    PersonCircle,
    BuildingUp,
    //BuildingDown
} from "react-bootstrap-icons";

import Search from "../Search";
import { Link } from "react-router-dom";
const Header = ({
    user, 
    upd, 
    searchArr, 
    setGoods, 
    
    setModalOpen
}) => {
    const login = () => {
        setModalOpen(true)
        //localStorage.setItem("user", "Polina");
        //upd("Polina");
    }
    
    return <header>
        <Logo/>
        <div className="search-block">
            <Search 
            data={searchArr}
            setGoods={setGoods}
            />
        </div>
        <nav className="header__menu">
            {user && <>
                <Link to="/">
                    <BalloonHeart title="Избранное"/>
                </Link>
                <Link to="/">
                    <Cart4 title="Корзина"/>
                </Link>
                <Link to="/profile">
                    <PersonCircle title="Личный кабинет"/>
                </Link>
            </>}
            <span>   
                {!user && <BuildingUp title="Войти" onClick={login}/>}
               
                </span>
        </nav>
    </header>
}

export default Header;