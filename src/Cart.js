import React from 'react';
import CartItem from './CartItem';

function Cart({ products }) {

  const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0.0);
  const formatedTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
      <ul className="lista-carrinho">
        {
          products.map(product => <CartItem key={product.id} product={product} />)
        }
      </ul>
      <div className="total">
        <p>Total: {formatedTotal}</p>
      </div>
    </>
  );
}

export default Cart;