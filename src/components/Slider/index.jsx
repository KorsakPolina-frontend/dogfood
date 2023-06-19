import {useState, useContext, useEffect} from "react";
import {Row, Col, Carousel, Container} from "react-bootstrap";
import BsCard from "../BsCard";
import Ctx from "../../ctx";
import "./style.css";

const Slider = ({desctop = 4, mobile = 1}) => {
    const {baseData} = useContext(Ctx);
    const [gds, setGds] = useState([[]]);
    const [cnt, setCnt] = useState(desctop);

    useEffect (()=> {
        if (window.innerWidth <= 768) {
            setCnt(mobile)
        }
        window.addEventListener("resize", function() {
            if (window.innerWidth <= 768) {
                setCnt(mobile)
            }else {
                setCnt(desctop)
            }
        })
    }, [])

    useEffect(() => {
        console.log(baseData)
        if (baseData.length) {
            //setGds(baseData.filter((el, i) => i <5));
            const itemArr = [];

            setGds(baseData.reduce((acc, el, i) => {
                if (i % cnt === 0) {
                    acc.push([]);
                }
                acc[acc.length - 1].push(el)
                return acc;
            }, []))
        }
    }, [baseData, cnt])
return <Container style={{gridTemplateColumns: "1fr"}}>
            <Carousel controls={false} interval={5000} indicators={false}>
                {gds.map((el, i) => <Carousel.Item key={i}>
                    <Row>
                        {el?.length > 0 && el.map(card => <Col xs={12 / cnt} key={card._id}>
                            <BsCard {...card} /></Col>)}                     
                    </Row>
                </Carousel.Item>)}
            </Carousel>
</Container>
}

export default Slider;