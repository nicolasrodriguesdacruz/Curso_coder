import React, {useEffect, useState} from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import {BeatLoader} from 'react-spinners'

export default function ItemListContainer () {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    console.log(categoryId);

    useEffect(()=> {
        ( async ()=> {
            try {
                console.log(categoryId);
                let response;
                if (categoryId) {
                    response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
                } else {
                    response = await fetch(`https://fakestoreapi.com/products`);
                }
                const data = await response.json();
                console.log(data);
                setProducts(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    console.log(products);

    return (
        <>
        <div className='item-list-container'>
            <h1>Aqui se puede ver un listado de los productos disponibles</h1>
        </div> 
        {products.length ? <ItemList products={products}/> : <BeatLoader/> }
        </>
    )
}


