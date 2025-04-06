import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ProductCard from "./productCard";

let LatestProduct = () => {
  let { id } = useParams();
  const [filtered, setfiltered] = useState([]);
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setfiltered(data);
      setproduct(data);
    };
    getProduct();
  }, [id]);

  let filterProduct = (catg) => {
    let filtering = filtered.filter((item) => item.category === catg);
    setproduct(filtering);
  };

  return (
    <>
      <h1 style={{ fontSize: "72px" }} className="fw-bolder text-center mt-5 mb-5 container border-bottom border-3 pb-3">
        Latest Products
      </h1>

      <div className="text-center">
        <Button variant="outline-secondary" className="ms-4 fw-bold" onClick={() => setproduct(filtered)}>
          All
        </Button>
        {filtered
          .filter((item, index, self) => index === self.findIndex((p) => p.category === item.category))
          .map((m) => (
            <Button
              key={m.category}  // ✅ إضافة مفتاح فريد لكل زر
              variant="outline-secondary"
              className="ms-4 fw-bold divButtons"
              onClick={() => filterProduct(m.category)}
            >
              {m.category}
            </Button>
          ))}
      </div>

      <ProductCard product={product} />  {/* ✅ تمرير المنتجات إلى `ProductCard` */}
    </>
  );
};

export default memo(LatestProduct);
