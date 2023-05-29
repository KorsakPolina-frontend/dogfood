import {useState} from "react";

import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Promo from "./components/Promo/Promo";
import Modal from "./components/Modal";
import {Header, Footer} from "./components/General";

const promoData = ["=)", "^_^", "O_o", "x_x", ";(", "=(", "OlO"];






const App = () => {
    //const user = localStorage.getItem("user");
    const [user, setUser] = useState(localStorage.getItem("user"))
    const  [goods, setGoods] = useState(testData)
    const [searchResult, setSearchResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <Header 
                user={user}
                upd={setUser}
                searchArr={testData}
                setGoods={setGoods}
                setSearchResult={setSearchResult}
                setModalOpen={setModalOpen}
            />
            <div className="container">
                {searchResult && <p className="search-result">{searchResult}</p>}
                 {goods.map((pro, i) => (
                 <Card key={i} img={pro.pictures} name={pro.name} price={pro.price}/>
                 ))}
                {/*promoData.map(el => <Promo key={el} text={el}/>)*/}
            </div>
            <Footer/>
            <Modal isActive={modalOpen} setIsActive={setModalOpen}/>
        </>
    )
  }

  export default App;