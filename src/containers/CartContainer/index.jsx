import React, { useContext } from "react";
import CartItem from "../../components/CartItem";
import Formulario from "../../components/Checkout/form";
import { Form } from "../../components/Checkout/form";
import { Shop } from "../../contexts/Shop";
import { saveOrder } from "../../services/saveOrder";

const CartContainer = () => {
    const { products, calculateTotal } = useContext(Shop);
    const { datos } = useContext(Form);


    const confirmPurchase = () => {
        (async () => {
           await saveOrder(
            datos.name,
            datos.email,
            datos.phone,
            products,
            calculateTotal()
           )
        })();
    };
    return (
        <div>
            {products.map((product) => {
                return <CartItem key={product.id} item={product} />;
            })}
            <Formulario/>
            <button className="btn btn-success p-3" onClick={confirmPurchase}>
                Confirmar compra
            </button>
        </div>
    );
};

export default CartContainer;

