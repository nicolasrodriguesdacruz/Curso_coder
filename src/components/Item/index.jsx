import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.scss'

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    //Navegar hacia el detalle del producto
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div onClick={navigateDetail} className="card-detail">
      <img src={product.images[1]} alt="product"/>
      <p key={product.id}>{product.title}, stock: {10}</p>
    </div>
  )
}

export default Item