// Write your JS code here
import './index.css'
import Header from '../Header'

const Products = () => (
  <>
    <Header />

    <div className="product-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        className="product-image"
        alt="products"
      />
    </div>
  </>
)

export default Products
