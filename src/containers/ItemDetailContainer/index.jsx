import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {

        const getProductDetail = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const product = await response.json();
            setProduct(product)
        }

        getProductDetail()
        //hacer el fetch del detalle del Producto
    }, [id])

    return (product ? <ItemDetail product={product}/> : <BeatLoader/> )
}; 

export default ItemDetailContainer;