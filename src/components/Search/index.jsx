import { useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom"
import "./style.css";
import Ctx from "../../ctx";

const Search = ({}) => {
    //let text = "ololo"
    const {setSearchResult, baseData, setGoods} = useContext(Ctx);
    
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [num, setNum] = useState(0);
    // в переменной хранится пустая строка
    const changeValue = (e) => {
        navigate("/catalog");
        let val = e.target.value.toLowerCase();
        setText(val);
        
    }
    useEffect(() => {
        let str = "";
        if (num && text) {
            str = `По запросу ${text} найдено ${num} товаров`;
        } else if (text) {
            str = `По запросу ${text} не найдено ни одного товара`;
        } else {
            str = "";
        }
        setSearchResult(str);
    }, [num, text]);
    useEffect(() => {
        //console.log(olol);
        let result = baseData.filter(el => el.name.toLowerCase().includes(text));
        setGoods(result);
        setNum(result.length);
        
    }, [text, baseData]);
    return <>
        <input className="search" type="search" value={text} onChange={changeValue}/>
    </>
}

export default Search;