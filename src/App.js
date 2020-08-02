import React from 'react';
import ProductIcon from './Icones/ProductIcon';
import CartIcon from './Icones/CartIcon';
import ProductList from './ProductList';
import Cart from './Cart';
import getProducts from './services/product-service';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      cart: []
    }
  }

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products: products });
  }

  addToCart = id => () => {
    const item = this.state.cart.find(product => product.id === id);
    if (item) {
      if (item.quantity < 5) {
        this.updateCartItemQuantity(id)(item.quantity + 1);
      }
    }
    else {
      const item = this.state.products.find(product => product.id === id);
      this.setState({ cart: [...this.state.cart, item] });
    }
  }

  updateCartItemQuantity = id => quantity => {
    quantity = parseInt(quantity);
    const cart = [...this.state.cart];
    const index = this.state.cart.findIndex(product => product.id === id);
    if (index > -1) {
      if (quantity > 0 && quantity <= 5) {
        cart[index].quantity = quantity;
        this.setState({ cart: cart });
      }
    }
  }

  removeItemFromCart = id => () => {
    const cartWithoutItem = this.state.cart.filter(product => product.id !== id);
    this.setState({ cart: cartWithoutItem });
  }

  render() {
    const products = this.state.products.map(item => ({ ...item, addToCart: this.addToCart(item.id) }));
    const productsOnCart = this.state.cart.map(item => {
      return {
        ...item,
        updateQuantity: this.updateCartItemQuantity(item.id),
        removeFromCart: this.removeItemFromCart(item.id)
      }
    });

    return (
      <div className='container'>
        <div className='produtos-display'>
          <div className='produtos-container'>
            <ProductIcon />
            <ProductList products={products} />
          </div>
        </div>

        <div className='carrinho-display'>
          <div className='carrinho-container'>
            <CartIcon />
            <Cart products={productsOnCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;