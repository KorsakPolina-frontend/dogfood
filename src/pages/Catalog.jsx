import Card from "../components/Card/Card";
const Catalog = ({goods, setBaseData, userId}) => {
    return <div className="container">
    <h1 style={{margin: 0, gridColumnEnd: "span 3"}}>Каталог</h1>
    {goods.map((pro, i) => (
         <Card key={i} img={pro.pictures} {...pro}
         setBaseData={setBaseData} user={userId}/>
     ))}
    </div>
}

export default Catalog;