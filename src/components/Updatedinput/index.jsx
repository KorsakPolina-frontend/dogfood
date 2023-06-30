import { useState } from "react"
import {Button, Form, Row, Col, Figure, Image} from "react-bootstrap";
import {CheckSquare, PencilSquare, XSquare} from "react-bootstrap-icons";





const Input = ({val, isActive, upd, changeActive, name}) => {

    const [inp, setInput] = useState()
    return <>
        {!isActive
            ? <>{name !== "avatar" && val} <Button onClick={() => changeActive(true)}><PencilSquare />
            </Button></>
            : <>
                <Form.Control value={inp} onChange={(e) => setInput(e.target.value)}/>
                <Button variant="danger" onClick={() => changeActive(false)}><XSquare /></Button>
                <Button variant="success" onClick={() => {
                    changeActive(false) 
                    upd(name, inp)
                }}><CheckSquare/></Button>
            </>
    }
    </>
}

export default Input;