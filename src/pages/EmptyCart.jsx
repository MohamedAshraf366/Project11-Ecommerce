import { Link } from "react-router-dom"

//In case user didn't choose any cart
export const EmptyCart = ()=>{
    return(
        <>
        <h1 className="text-center fw-bolder">Your cart is empty</h1>
        <Link className="d-flex justify-content-center fs-3 fw-bold" to={'/'}>Continue Shopping</Link>
        </>
    )
}