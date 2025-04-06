import { useSelector } from "react-redux"
import { EmptyCart } from "./EmptyCart"
import { ShowCheckOutPage } from "./showCheckOutPage"

export const Checkout = ()=>{
    let state = useSelector(state => state.handleCart) ||[]  //to bring handleCart from redux
    return(
        <>
            <div className="container">
            <h1 className="fw-bolder text-center border-bottom border-2 pb-3 mt-5 mb-5">Checkout</h1>
            {state.length>0 ?<ShowCheckOutPage />:<EmptyCart />}
        </div>
        </>
    )
}
