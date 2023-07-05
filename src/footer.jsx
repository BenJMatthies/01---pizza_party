import pizzaData from "./data";

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

  export default Footer