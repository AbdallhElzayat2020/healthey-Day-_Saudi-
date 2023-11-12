import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);
  const api_Cat = "https://fakestoreapi.com/products";
  let Params = useParams();
  useEffect(() => {
    fetch(`${api_Cat}/${Params.detailsId} `)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  });
  return (
    <section className="details">
      <div className="container">
        <div className="row gap-5">
          <div className="col-lg-5 img shadow-sm image">
            <img className=" mx-auto img" src={details.image} alt="" />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center row text-center">
            <h3>{details.title}</h3>
            <p>{details.description}</p>
            <button className="btn btn-primary">
              <strong>$</strong>
              {details.price}.00
            </button>
            <button className="btn btn-primary">
              <strong>$</strong>
              {details.price}.00
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
