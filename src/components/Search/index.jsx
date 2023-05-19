import { useState, useEffect } from "react";
import "./style.css";

const Search = ({data, setGoods, setSearchResult}) => {
    //let text = "ololo"
    const [text, setText] = useState("");
    const [num, setNum] = useState(0);
    // в переменной хранится пустая строка
    const changeValue = (e) => {
        let val = e.target.value.toLowerCase();
        setText(val);
        //setNum(data.filter(el => el.name.toLowerCase().includes(val)).length);
    }
    const changeText = () => {}
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
    }, [num]);
    useEffect(() => {
        //console.log(olol);
        let result = data.filter(el => el.name.toLowerCase().includes(text));
        setGoods(result);
        setNum(result.length);
        console.log(text)
    }, [text]);
    return <>
        <input className="search" type="search" value={text} onChange={changeValue}/>
    </>
}

export default Search;