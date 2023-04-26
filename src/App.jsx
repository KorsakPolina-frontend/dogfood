
const Promo = (props) => {
    return (
        <div className="promo__block">
            <div className="promo__img"/>
            <p className="promo__text">{props.text || "-"}</p>
        </div>
    )
}

const App = () => {
    return (
      <div>
        <h1>First Page</h1>
        <div className="container">
            <Promo text="First"/>
            <Promo text="Second"/>
            <Promo text={4 * 10}/>
            <Promo/>
        </div>
      </div>
    )
  }

  export default App;