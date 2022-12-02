import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import products from '../data/fakeStoreApi.json';

const saveProductsFirebase = async () => {

    try {    
        //
        products.forEach(async (product) => {
            const docRef = await addDoc(collection(db, "products"), {
                title: product.name,
                price: product.price,
                description: product.description,
                category: product.category,
                image: product.image,
                quantity: 30,
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveProductsFirebase;