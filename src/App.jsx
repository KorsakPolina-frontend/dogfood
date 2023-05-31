import {useState, useEffect} from "react";

import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Promo from "./components/Promo/Promo";
import Modal from "./components/Modal";
import {Header, Footer } from "./components/General";
import Banner from "./components/General/Banner";
import Advertisement from "./components/Advertisement";

const promoData = ["=)", "^_^", "O_o", "x_x", ";(", "=(", "OlO"];






const App = () => {
    //const user = localStorage.getItem("user");
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [userId, setUserId] = useState(localStorage.getItem("user-id"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const  [goods, setGoods] = useState(testData);
    const [searchResult, setSearchResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (user) {
            setUserId(localStorage.getItem("user-id"));
            setToken(localStorage.getItem("token"));
        } else {
            localStorage.removeItem("user-id");
            localStorage.removeItem("token");
            setUserId(null);
            setToken(null);
        }
    }, [user])

    useEffect(() => {
        console.log("token", token);
    }, [token]);
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
            <Banner/>
            <Advertisement/>
            <div className="container">
                {searchResult && <p className="search-result">{searchResult}</p>}
                 {goods.map((pro, i) => (
                 <Card key={i} img={pro.pictures} name={pro.name} price={pro.price}/>
                 ))}
                {/*promoData.map(el => <Promo key={el} text={el}/>)*/}
            </div>
            
            <Footer/>
            <Modal 
                isActive={modalOpen} 
                setIsActive={setModalOpen}
                setUser={setUser}
                />
        </>
    )
  }

  export default App;