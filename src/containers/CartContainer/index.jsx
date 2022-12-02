import React, { useContext } from "react";
import CartItem from "../../components/CartItem";
import { Shop } from "../../contexts/Shop";
import { saveOrder } from "../../services/saveOrder";

const CartContainer = () => {
    const { products, calculateTotal } = useContext(Shop);

    const confirmPurchase = () => {
        (async () => {
           await saveOrder(
            "Sebas",
            11111122222,
            "sebas@live.com",
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
            <button className="btn btn-success p-3" onClick={confirmPurchase}>
                Confirmar compra
            </button>
        </div>
    );
};

export default CartContainer;