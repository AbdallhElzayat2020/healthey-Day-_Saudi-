// import React from 'react';

const Product = (props) => {
  const { product } = props;
  // const {product}=props
  return (
    <div className="card border-0 shadow-sm">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* <h5 className="card-title mb-4">{product.title}</h5> */}
        {/* <div className="buttons d-flex align-items-center justify-content-between">
          <button href="#" className="btn btn-primary w-100">
            {product.price}
          </button>
          <Link to={`/details/${product.id}`} className="btn btn-primary">
            Details
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
