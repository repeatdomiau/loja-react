import React from 'react';

function Product({ product: { name, image, price, quantity, updateQuantity, removeFromCart } }) {

  const imagePath = `./imagens/${image}`;
  const formatedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <li>
      <img src={imagePath} alt={name} />
      <span>{name}</span>
      <span>{formatedPrice}</span>
      <input type="number" className="qtd" value={quantity} min="1" max="5" onChange={evt => updateQuantity(evt.target.value)} />
      <button className="remover-item" onClick={removeFromCart}></button>
    </li>
  );

}

export default Product;