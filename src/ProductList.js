import React from 'react';
import Product from './Product';

function ProductList({ products }) {

  return (
    <ul className="lista-produtos">
      {
        products.map(product =>
          <Product product={product} />)
      }
    </ul>
  )
}

export default ProductList;