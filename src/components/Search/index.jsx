import { useState } from "react";

const Search = ({data}) => {
    //let text = "ololo"
    const [text, setText] = useState("");
    const [num, setNum] = useState(0);
    // в переменной хранится пустая строка
    const changeValue = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
       
        setNum(data.filter(el => el.name.includes(e.target.value)).length);
    }
    const changeText = () => {
        console.log("Click")
        setText("Привет!");
    }
    return <>
    <input type="search" value={text} onChange={changeValue}/>
    {text && <p>По запросу {text} найдено {num} товаров</p>}
    </>
}

export default Search;