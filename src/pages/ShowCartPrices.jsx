import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../redux/actions";
import Button from "react-bootstrap/Button";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const  ShowCartPrices = ()=>{
    let state = useSelector(state => state.handleCart) ||[]  //to bring handleCart from redux
    let dispatch = useDispatch();

    // for dispatch addItem and deleteItem from acton>redux
    let addItem = (product)=>{
        dispatch(addCart(product))
    }
    
    let delItem = (product)=>{
        dispatch(deleteCart(product))
    }

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
        <div className="row g-2">
            <div className="col-md-8">
                <ul className="list-group">
                    <li className="list-group-item bg-secondary text-center text-white fw-bolder fs-3">
                        Items List
                    </li>

                    <li className="list-group-item border  border-0">
                        <div className="row">
                            {state.map((mm) => (
                            <div  className="d-flex align-items-center justify-content-between mt-3 border border-3 p-3">
                                {/* صورة المنتج */}
                                <div className="col-md-4">
                                <img
                                    src={mm.image}
                                    className="img-fluid rounded"
                                    alt={mm.title}
                                    style={{ width: "150px", height: "150px" }}
                                />
                                </div>

                                {/* عنوان المنتج */}
                                <div className="col-md-4">
                                <h5 className="card-title cardText">{mm.title}</h5>
                                </div>

                                {/* التحكم في الكمية */}
                                <div className="col-md-4 text-center">
                                <i
                                    className="fa-solid fa-plus text-success me-3 fs-3 "
                                    style={{ cursor: "pointer" }}
                                    onClick={() => addItem(mm)} // استدعاء دالة الإضافة
                                ></i>

                                <span className="fs-2">{mm.qty}</span>

                                <i
                                    className="fa-solid fa-minus text-warning ms-3 fs-3"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => delItem(mm)} // استدعاء دالة الحذف
                                ></i>
                                </div>
                            </div>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>

  {/* 🛍️ قسم ملخص الطلب */}
  <div className="col-md-4">
    <ul className="list-group">
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
        <div className="d-flex justify-content-center">
          <Button href="/checkout" className="align-self-center" variant="outline-secondary">
            Proceed to Checkout
          </Button>
        </div>
      </li>
    </ul>
  </div>
</div>
        </>
    )
}