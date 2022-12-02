import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import ItemDetail from "../../components/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {

        const getProductDetail = async () => {
            const docRef = doc(db, "products", id);

            //2do generar la petición
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProduct({...docSnap.data(), id: docSnap.id})
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        getProductDetail()
    }, [id])

    return (product ? <ItemDetail product={product}/> : <BeatLoader/> )
}; 

export default ItemDetailContainer;