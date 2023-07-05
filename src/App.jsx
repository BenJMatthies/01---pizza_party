import pizzaData from "./data"
import "./index.css"
import PropTypes from 'prop-types'

function App () 
{
  return <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>
}

////////////
/* HEADER */
////////////

function Header() {
  return (
  <header className="header">
    <h1>
      Fast React Pizza Co.
    </h1>
  </header>);
}

//////////
/* MENU */
//////////

function Menu() {
  const flavorText = "Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious."
  const noMenu = "We're still working on our menu, please come back later! :)"

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>{flavorText}</p>
          <MenuDisplay/>
        </>
        ) : <p>{noMenu}</p>}
    </main>
  )
}

function MenuDisplay() {
  return (
    <ul className="pizzas">
      {pizzaData.map(pizza => (
        <Pizza pizzaObject={pizza} key={pizza.name}/>
      ))}
    </ul>
  )
}

function Pizza({pizzaObject}) {
  const pizzaClassName = `pizza${pizzaObject.soldOut ? " sold-out" : ""}`;

  return (
    <li className={pizzaClassName}>
      <img src={"src/"+pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h2>{pizzaObject.name}</h2>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "SOLD OUT" : pizzaObject.price}</span>
      </div>
    </li>
  )
}
Pizza.propTypes = {
  pizzaObject: PropTypes.object.isRequired
}

////////////
/* FOOTER */
////////////

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  const footerMarkup = (
    <footer className="footer">
      {isOpen ? FooterOpenDisplay(openHour, closeHour) : FooterClosedDisplay(openHour, closeHour)}
    </footer>
  )

  return (
    pizzaData.length > 0 ? footerMarkup : null
  )
}

function FooterOpenDisplay(openHour, closeHour) {
  const openText = `We're open until ${closeHour}:00. Come visit us or order online!`
  return (
    <div className="order">
      <p>{openText}</p>
      <button className="btn">Order</button>
    </div>
  )
}

function FooterClosedDisplay(openHour, closeHour) {
  const closedText = `Our hours are ${openHour}:00 to ${closeHour}:00. Please check back then!`
  return (
    <div className="order">
      <p>{closedText}</p>
      <button className="btn">Order</button>
    </div>
  )
}

export default App

 
