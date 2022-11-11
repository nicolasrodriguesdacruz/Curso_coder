import React from 'react';
import './styles.scss';

const ItemDetail = ({product}) => {
  console.log(product);
  return (
    <div className='item-detail'>
      <img style={{width: 250,height: 250}} src={product.image} />
      <h1 >{product.title}</h1>
      <button className='btn btn-danger sm-3'>Bootstrap button</button>
    </div>
  )
}
export default ItemDetail