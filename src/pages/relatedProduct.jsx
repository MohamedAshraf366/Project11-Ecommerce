import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./productCard";

let RelatedProduct = ({ similarProduct, product }) => {

  // تصفية المنتجات المشابهة بحيث لا يظهر المنتج الحالي
  const filteredProducts = similarProduct.filter((item) => item.id !== product.id);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: filteredProducts.length > 2 ? 3 : filteredProducts.length,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {filteredProducts.length > 0 ? (
        <div className="slider-container container mb-5">
          <h2 className="text-center mt-5 mb-4">Similar Products</h2>
          <Slider {...settings}>
           
            
            {filteredProducts.map((m) => (
              <div key={m.id}>
                <div className="w-200">
              <ProductCard product={[m]} className="relatedProducts"/> 
              </div>
              {/* // 
              //   <Card className="p-3 ms-4">
              //     <Card.Img variant="top" src={m.image} className="h-25" />
              //     <Card.Body>
              //       <Card.Title className="cardTitle">{m.title}</Card.Title>
              //       <Card.Text className="cardText">{m.description}</Card.Text>
              //       <Button href={`/product/${m.id}`} variant="outline-secondary">
              //         View Product
              //       </Button>
              //       <Button variant="outline-secondary" className="ms-3">Add To Cart</Button>
              //     </Card.Body>
              //   </Card> */}
              </div>
))}
            
            
          </Slider>
        </div>
      ) : (
        <p className="text-center mt-4">No similar products found.</p>
      )}
    </>
  );
};

export default memo(RelatedProduct);
