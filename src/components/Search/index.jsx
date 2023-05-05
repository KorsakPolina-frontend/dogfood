import { useState } from "react";

const Search = () => {
    //let text = "ololo"
    const [text, setText] = useState("");
    // в переменной хранится пустая строка
    const changeValue = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    const changeText = () => {
        console.log("Click")
        setText("Привет!");
    }
    return <>
    <input type="search" value={text} onChange={changeValue}/>
    <button onClick={changeText}>Тык</button>
    <p>{text}</p>
    </>
}

export default Search;