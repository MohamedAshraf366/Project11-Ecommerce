
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comment";
import RelatedProduct from "./relatedProduct";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { addCart } from "../redux/actions";
import toast from "react-hot-toast";


let SpecificProduct = ()=>{
    let{id} = useParams()
    let[product, setProduct] = useState([])
    let[similarProduct, setsimilarProduct] = useState([])
    let dispatch = useDispatch()
    let addToCartHandler = (selectedProduct)=>{
      dispatch(addCart(selectedProduct))
      toast.success(`${selectedProduct.title} added to cart! 🛒`);
    }

    useEffect(()=>{
        let getProductData = async()=>{
            let response = await fetch(`https://fakestoreapi.com/products/${id}`);
            let data =await response.json()
            setProduct(data)
            
            let response2 = await fetch(`https://fakestoreapi.com/products/category/${data.category}`);
            let data2 = await response2.json()
            setsimilarProduct(data2)  
        }
        getProductData()
        
    },[id])

    return(
        <>
<div className="container" style={{marginBottom:'100px'}}>
    <div className="card mb-3 border-0 specifiProduct-card mt-5">
        <div className="row g-4 ">
            <div className="col-md-6 d-flex justify-content-center align-items-center ">
                <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
            </div>
            <div className="col-md-6">
                <div className="card-body d-fle justify-content-center">
                    <h1 className="card-title">{product.title}</h1>
                    <h2 className="card-title" style={{textTransform:"Capitalize"}}>{product.category}</h2>
                    <h3 className="card-title">{product.price}$</h3>
                    <h5 className="card-title">{product.rating?.rate}⭐</h5>
                    <p className="card-text">{product.description}</p>
                    <Button variant="outline-secondary" className="" onClick={()=>addToCartHandler(product)}>Add To Cart</Button>
                </div>
            </div>
        </div>
    </div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
<Comment />


<RelatedProduct similarProduct = {similarProduct} product = {product}/>
{/* //////////////////////////////////////////////////////////////////////////////////////////////// */}

    

        </>
    )
}



export default  SpecificProduct
