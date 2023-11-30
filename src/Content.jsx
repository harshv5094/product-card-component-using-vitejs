import cart from '../public/icon-cart.svg'

function MainComponent() {
  return (
    <div className="container">
      <div className="image"></div>
      <div className="description">
        <span>PERFUME</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <section className="price">
          <section className="current">$149.99</section>
          <strike>$169.99</strike>
        </section>
        <br />
        <button className="cart-button">
          <span>
            <img src={cart} alt="" /> Add to Cart
          </span>
        </button>
      </div>
    </div>
  )
}

export default MainComponent
