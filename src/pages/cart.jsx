
import {  useSelector } from "react-redux";
import { EmptyCart } from "./EmptyCart";
import { ShowCartPrices } from "./ShowCartPrices";



let Cart = () => {
    let state = useSelector(state => state.handleCart) ||[]  //to bring handleCart from redux
    return (
        <div className="container">
            <h1 className="fw-bolder text-center border-bottom border-2 pb-3 mt-5 mb-5">Cart</h1>
            {state.length>0 ?<ShowCartPrices />:<EmptyCart />}
        </div>
    );
};

export default Cart;
