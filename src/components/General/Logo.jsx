import logoImg from "../../assents/images/logo.png";
const Logo = () => {
    <a className="logo">
       {/* <span className="logo__pic"></span>*/}
       <img src={logoImg} alt="DogFood" />
        <span className="logo__text">DogFood</span>
    </a>
}

export default Logo;
