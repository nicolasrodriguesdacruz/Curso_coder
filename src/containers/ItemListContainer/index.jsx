import React, {useEffect, useState} from 'react';
import './styles.css';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import {ClimbingBoxLoader} from 'react-spinners'

export default function ItemListContainer ({greeting, greeting2}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    console.log(categoryId);

    useEffect(()=> {
        ( async ()=> {
            try {
                console.log(categoryId);
                let response;
                if (categoryId) {
                    response = await fetch(`https://dummyjson.com/products/categories/${categoryId}`);
                } else {
                    response = await fetch(`https://dummyjson.com/products`);
                }   
                const data = await response.json();
                console.log(data);
                if (data.results) setProducts(data.results)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    console.log(products);

    return (
        <>
            {/* {<div className='item-list-container'>
                <h2>{greeting}</h2>
                <h2>{greeting2}</h2>
            </div> } */}
            {products.length ? <ItemList products={products}/> : <ClimbingBoxLoader/> }
        </>
    )
}


