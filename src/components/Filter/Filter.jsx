import { useEffect, useState } from "react";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";
const Filter = () => {
  const api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [load, setLoad] = useState(false);

  const getProducts = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  // get categories data
  const getCategories = () => {
    fetch(`${api}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.log(err);
      });
  };
  // get categories data
  // get categoriesProducts
  const categoriesProducts = (cateName) => {
    console.log(cateName);
    fetch(`${api}/category/${cateName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  // get categoriesProducts
  useEffect(() => {
    AOS.init();
    getProducts();
    getCategories();
  }, []);
  return (
    <div className="product-list">
      <h2 data-aos="zoom-in" className="text-center text-white my-3">
        معرض اعمالنا
      </h2>
      <div className="container text-center">
        <button
          data-aos="zoom-in"
          className="btn btn-primary ms-2"
          onClick={getProducts}
        >
          All
        </button>
        {categories.map((cat) => {
          return (
            <button
              className="btn m-2 btn-primary btn-gallery"
              key={cat}
              onClick={() => {
                categoriesProducts(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div
                data-aos="zoom-in"
                className="col-lg-3 my-3"
                key={product.id}
              >
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
