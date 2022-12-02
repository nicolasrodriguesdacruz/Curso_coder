import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles.scss'
import { Theme } from '../../contexts/Theme';

/**
 * Card que muestra el producto o personaje
 * @property {Object} product Recibe el product en formato de objeto para renderizarlo
 * @returns JSX con el renderizado del producto
 */

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const {themeColor} = useContext(Theme);

  const navigateDetail = () => {
    //Navegar hacia el detalle del producto
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div onClick={navigateDetail} className="card-detail">
      <img style={{width: 150,height: 150}} src={product.image} alt="product"/>
      <p key={product.id}>{product.title}, stock: {product.quantity}</p>
    </div>
  )
}

export default Item