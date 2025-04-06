import { useSelector } from "react-redux"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

export const ShowCheckOutPage = ()=>{
    let state= useSelector(state =>state.handleCart) ||[]
    let subtotal = 0
    let shipping = 10
    let totalItems = 0
    //state contain the product in carr
    state.map((item)=>{ // to calculate to total price
        return (subtotal += item.price * item.qty)
    })
    state.map((item)=>{ // to calculate the total products count
        return (totalItems += item.qty)
    })
    return(
        <>
    <div className="container">
        <div className="row g-2">
            <div className="col-md-8">
                <ul class="list-group bg-secondary">
                <li class="list-group-item bg-secondary text-center text-white fw-bolder fs-3">Billing Address</li>
                    <li class="list-group-item">
                        <div className="row g-2">
                            <div className="col-md-6">
                            <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                                <Form.Control type="text" placeholder="First Name" required/>
                            </FloatingLabel>
                            </div>
                            <div className="col-md-6">
                            <FloatingLabel controlId="floatingInput" label="Second Name" className="mb-3">
                                <Form.Control type="text" placeholder="Second Name" required />
                            </FloatingLabel>
                            </div>
                            <div className="col-md-12">
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" required />
                            </FloatingLabel>
                            </div>
                            <div className="col-md-12">
                            <FloatingLabel controlId="floatingInput" label="Address 1" className="mb-3">
                                <Form.Control type="text" placeholder="Address 1" required />
                            </FloatingLabel>
                            </div>
                            <div className="col-md-12">
                            <FloatingLabel controlId="floatingInput" label="Address 2 (Optibal)" className="mb-3">
                                <Form.Control type="text" placeholder="Address 2 (Optibal)" />
                            </FloatingLabel>
                            </div>
                            <hr />
                            <h1 className="fw-bolder">Payment</h1>
                            <div className="col-md-6">
                            <FloatingLabel controlId="floatingInput" label="Name of the Card" className="mb-3">
                                <Form.Control type="text" placeholder="Name of the Card" required/>
                            </FloatingLabel>
                            <small className="text-muted"> Full name as displayed on card </small>
                            </div>
                            <div className="col-md-6">
                            <FloatingLabel controlId="floatingInput" label="Credit Card Number" className="mb-3">
                                <Form.Control type="text" placeholder="Credit Card Number" required/>
                            </FloatingLabel>
                            </div>
                            <div className="col-md-3">
                            <FloatingLabel controlId="floatingInput" label="Expiration" className="mb-3">
                                <Form.Control type="text" placeholder="Expiration" required/>
                            </FloatingLabel>
                            </div>
                            <div className="col-md-3">
                            <FloatingLabel controlId="floatingInput" label="CCV" className="mb-3">
                                <Form.Control type="text" placeholder="CCV" required/>
                            </FloatingLabel>
                            </div>
                            <hr />
                            <Button variant="outline-secondary">Countinue to checkout</Button>
                        </div>
                    </li>
                </ul>
            </div>
    {/* ////////////////////////////////////////////////////////////////////////////// */}
            <div className="col-md-4">
                <ul className="list-group bg-secondary">
                    <li className="list-group-item bg-secondary text-center text-white fw-bolder fs-3">
                    Order Summary
                    </li>
                    <li className="list-group-item">
                    <p className="d-flex justify-content-between">
                    <span>Products {totalItems}</span>
                    <span>{Math.round(subtotal) } $</span>
                    </p>
                    <p className="d-flex justify-content-between">
                    Shipping <span>{shipping} $</span>
                    </p>
                    <p className="d-flex justify-content-between fw-bold">
                    Total
                    <span>{Math.round(subtotal + shipping) } $</span>
                    </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        </>
    )
}