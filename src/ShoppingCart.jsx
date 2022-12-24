import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import data from "./Data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ShoppingCart(props) {
  const [itemCount, setItemCount] = useState(0);

  const Stars = (star) => {
    const starList = [];
    for (let i = 0; i < star; i++) {
      starList.push(
        <span>
          {" "}
          <FontAwesomeIcon icon={faStar} key={i} />{" "}
        </span>
      );
    }
    return starList;
  };

  const manageItems = (e) => {
    if (e.target.innerText === "Add to Cart") {
      setItemCount(itemCount + 1);
      e.target.innerText = "Remove from Cart";
      e.target.classList.value = "btn btn-danger mt-auto";
      alert("One Item Added");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else if (e.target.innerText === "Remove from Cart") {
      setItemCount(itemCount - 1);
      e.target.innerText = "Add to Cart";
      e.target.classList.value = "btn btn-primary mt-auto";
      alert("One Item Removed");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav itemCount={itemCount} />
      <Header />
      <div className="container">
        <div className="row text-center  row-cols-md-4 g-4 ">
          {props.data.map((item, index) => {
            // We can also use the below destructuring method to get the item name from the data
            {
              /* {props.data.map(  
                ({ cardName, btnName, ImageSrc, ImageAlt, sale, price: { oldPrice, NewPrice } , starNumbers}, index) => { */
            }
            return (
              <div key={index}>
                <div className="col ">
                  <div className="card cardClass">
                    <div>
                      {" "}
                      <span className="badge bg-dark text-white text-center position-absolute saleClass">
                        {item.sale}
                      </span>{" "}
                    </div>
                    <img
                      className="card-img-top "
                      src={item.ImageSrc}
                      alt={item.ImageAlt}
                    ></img>
                    <div className="card-body cardBodyClass">
                      <h5 className="card-title fw-bold "> {item.cardName}</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        {Stars(item.starNumbers)}
                      </div>
                      <div className="card-text">
                        <span className="text-decoration-line-through">
                          {item.price.oldPrice}
                        </span>
                        <span key={index}> {item.price.NewPrice}</span>{" "}
                      </div>
                    </div>
                    <div className="card-footer mt-5 bg-transparent border-top-0">
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={manageItems}
                      >
                        {item.btnName}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
