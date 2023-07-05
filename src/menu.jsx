import pizzaData from "./data"
import PropTypes from 'prop-types'

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

  export default Menu