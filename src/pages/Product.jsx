import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Product = () => {
    const { id } = useParams()
    return <>
    <h1>Страница товара {id}</h1>
    </>
}

export default Product