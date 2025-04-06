import Carousel from 'react-bootstrap/Carousel';
import { products } from '../utilities';

function Main() {
  return (
<Carousel className=''>
    {products.map((m)=>(
        <Carousel.Item>
            <div className="card mb-3 container pt-5 pb-5 border-0" >
                <div className="row g-4 align-items-center">
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title fs-1 fw-bold mb-5">50% Off For Your First Shopping</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={m.url} className="img-fluid rounded-circle h-50 w-50 ms-5" alt="..." />
                    </div>
                </div>
            </div>
        </Carousel.Item>
    ))}        
</Carousel>
  );
}

export default Main;