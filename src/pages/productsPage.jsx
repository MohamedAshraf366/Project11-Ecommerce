import { useEffect, useRef, useState } from "react";
import ProductCard from "./productCard";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

let ProductsPage = () => {
    let { id } = useParams();
    let [product, setProduct] = useState([]);
    let [filteredList, setFilteredList] = useState([]); // ✅ قائمة المنتجات المفلترة
    let searchRef = useRef();

    useEffect(() => {
        let getProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();
            setProduct(data);
            setFilteredList(data);
        };
        getProducts();
    }, [id]);

    let handleFilterChange = (event) => {
        let category = event.target.value;
        if (category === "All") {
            setFilteredList(product);
        } else {
            let filteredData = product.filter(
                (item) => item.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredList(filteredData);
        }
    };

    let handleSearchChange = () => {
        let searchValue = searchRef.current.value.toLowerCase();
        let filteredData = product.filter((item) =>
            item.title.toLowerCase().includes(searchValue)
        );
        setFilteredList(filteredData);
    };

    return (
        <>
            <div className="container">
                <h1 className="fw-bolder text-center mt-5 border-bottom border-3 pb-3">
                    Our Products
                </h1>

                <div className="card mb-3 mt-3 border-0">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <Form.Select onChange={handleFilterChange}>
                                <option value="All">All</option>
                                <option value="men's clothing">Men's Clothing</option>
                                <option value="jewelery">Jewelry</option>
                                <option value="electronics">Electronics</option>
                                <option value="women's clothing">Women's Clothing</option>
                            </Form.Select>
                        </div>
                        <div className="col-md-8">
                            <input
                                className="form-control"
                                type="text"
                                ref={searchRef}
                                onChange={handleSearchChange}
                                placeholder="Search for products..."
                            />
                        </div>
                    </div>
                </div>

                <ProductCard product={filteredList} /> {/* ✅ تمرير القائمة المفلترة */}
            </div>
        </>
    );
};

export default ProductsPage;
