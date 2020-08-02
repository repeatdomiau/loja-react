import React from 'react';

function Product({ product: { name, image, addToCart } }) {

  const imagePath = `./imagens/${image}`;

  return (
    <li>
      <img src={imagePath} alt={name} />
      <h4>{name}</h4>
      <div className="action-buttons">
        <button>Detalhes</button>
        <button onClick={addToCart}>Comprar</button>
      </div>
    </li>
  );

}

export default Product;