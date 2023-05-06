import {useState} from "react";

import testData from "./assents/data.json";
import Card from "./components/Card/Card";
import Promo from "./components/Promo/Promo";
import {Header, Footer} from "./components/General";

const promoData = ["=)", "^_^", "O_o", "x_x", ";(", "=(", "OlO"];






const App = () => {
    //const user = localStorage.getItem("user");
    const [user, setUser] = useState(localStorage.getItem("user"))
    return (
        <>
         <Header user={user} upd={setUser}
                searchArr={testData}/>
            <div>
                 <h1>First Page</h1>
                <div className="container">
                 {testData.map((pro, i) => (
                 <Card key={i} img={pro.pictures} name={pro.name} price={pro.price}/>
                 ))}
                 {promoData.map(el => <Promo key={el} text={el}/>)}
                </div>
             </div>
             <Footer/>
        </>
    )
  }

  export default App;