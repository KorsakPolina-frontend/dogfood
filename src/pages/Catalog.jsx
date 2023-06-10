import Card from "../components/Card/Card";
const Catalog = ({goods}) => {
    return <div className="container">
    <h1 style={{margin: 0, gridColumnEnd: "span 3"}}>Каталог</h1>
    {goods.map((pro, i) => (
         <Card key={i} img={pro.pictures} {...pro}/>
     ))}
    </div>
}

export default Catalog;