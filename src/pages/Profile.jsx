import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {Button, Container, Form, Row, Col, Figure, Image} from "react-bootstrap";
import {CheckSquare, PencilSquare, XSquare} from "react-bootstrap-icons";
import Ctx from "../ctx";
import UpdatedInput from "../components/Updatedinput";

const Profile = ({setUser}) => {
    const navigate = useNavigate()
    const { api } = useContext(Ctx);
    const [userData, setUserData] = useState({});
    const [inpName, setInpName] = useState(false);
    const [inpEmail, setInpEmail] = useState(false);
    const [inpAbout, setInpAbout] = useState(false);
    const [inpAvatar, setInpAvatar] = useState(false);

    //const userInfo = [
       // {name: "name", text: "Имя"},
      //  {name: "email", text: "Email"},
      //  {name: "about", text: "Подробности"}
   // ]

    const updUser = (name, val) => {
        let body = {...userData}
        if (name !== "avatar") {
            delete body.avatar;
        }
        body[name] = val;
        api.updAdmin(body, name === "avatar").then(data => setUserData(data));
    }

    const logOut = () => {
        setUser("");
        localStorage.removeItem("user");
        navigate("/");
    }
    useEffect(() => {
        api.getAdmin()
        .then(data => {
           setUserData(data);
        })
    }, [])
    return <>
    <Container className="px-0">
        <Row>
            {userData?.name && <>
            <Col xs={12} sm={6}>
                <h1>Личный кабинет</h1>
                <div><UpdatedInput 
                        val={userData.name} 
                        isActive={inpName} 
                        changeActive={setInpName}
                        upd={updUser}
                        name="name"
                    /></div>
                    <div><UpdatedInput 
                        val={userData.email} 
                        isActive={inpEmail} 
                        changeActive={setInpEmail}
                        upd={updUser}
                        name="email"
                    /></div>
                    <div><UpdatedInput 
                        val={userData.about} 
                        isActive={inpAbout} 
                        changeActive={setInpAbout}
                        upd={updUser}
                        name="about"
                    /></div>

            </Col>
            <Col xs={12} sm={6}>
                <Figure>
                    <Figure.Image 
                    src={userData.avatar} 
                    alt={userData.email}/>
                </Figure>
                <Figure.Caption>
                    <UpdatedInput 
                        val={userData.avatar} 
                        isActive={inpAvatar} 
                        changeActive={setInpAvatar}
                        upd={updUser}
                        name="avatar"
                    />
                </Figure.Caption>
            </Col>
            <Button variant="warning" as={Link} to="/add/product/new">Добавить товар</Button>
            <br/>
            <Button variant="secondary" onClick={logOut}>Выйти из аккаунта</Button>
            </>}
        </Row>
        </Container>
    </>
}

export default Profile