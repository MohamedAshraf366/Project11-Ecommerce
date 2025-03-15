import { memo } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions';
import toast, { Toaster } from 'react-hot-toast';

let ProductCard = ({ product, id }) => {  // ✅ استقبال المنتجات كمُدخل فقط
  let dispatch = useDispatch()
  let addToCartHandler = (selectedProduct)=>{
    dispatch(addCart(selectedProduct)) 
    toast.success(`${selectedProduct.title} added to cart! 🛒`);
  }

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {product.map((m) => (  // ✅ استخدام `product` القادم من `LatestProduct`
          <div className="col-xs-12 col-xl-4  " key={m.id}>
            <Card className="p-3">
              <Card.Img variant="top" src={m.image} className="card-img-top" />
              <Card.Body>
                <Card.Title className="cardTitle">{m.title}</Card.Title>
                <Card.Text className="cardText">{m.description}</Card.Text>
                <Button href={`/product/${m.id}`} variant="outline-secondary" >View Product</Button>
                <Button variant="outline-secondary" className="ms-3" onClick={()=>addToCartHandler(m)}>
                  Add To Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductCard);
