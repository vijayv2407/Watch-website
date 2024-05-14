import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


export const Navbar = ({ cartItems, setCartItems }) => {

  const addAndremove = (gettingdata, num) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === gettingdata.id) {
        // Update count of the clicked product
        const newCount = item.count + num;
        // If count becomes less than or equal to zero, remove the product
        if (newCount <= 0) {
          return null; // We'll filter out null values later
        }
        return {...item, count: newCount};
      }
      return item;
    }).filter(Boolean); // Filter out null values
 
    setCartItems(updatedCart);
  };

  useEffect(() => {

    // removed duplicate data

const duplicateremoveddata = cartItems.reduce((index,item)=>{
  if(!index.some((dds)=> dds.id === item.id)){
    index.push(item)
  }
  return index

},[])
setCartItems(duplicateremoveddata)

  })
  
  return (
    <div>
      <div className="desktop">
        <section className="nbar">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <a class="navbar-brand logoImage" href="#">
                <img src={require("./Image/logo.png")} />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                  <li class="nav-item">
                    <Link to="/" className="nav-link active text-light fs-5">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/Product" className="nav-link text-light fs-5">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/Cart" className="nav-link text-light fs-5">
                      Cart
                    </Link>
                  </li>
                </ul>
                <ul class="navbar-nav gap-4 mx-5 text-light">
                  <li>
                    <svg
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-bag"
                      viewBox="0 0 16 16"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">
                Cart
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div>
                {cartItems.map((navCart, index) => (
                  <div key={index} className="col-md-4">
                    <div class="canvasCss card border-0 mb-3">
                      <div className="d-flex">
                        <div className=" img-fluid rounded-start my-3">
                          <img src={navCart.img} alt="..." />
                        </div>
                        <div className="col-lg-12 ms-5">
                          <div class="card-body">
                            <span>{navCart.name}</span>
                            <h6 class="card-title">{navCart.modelName}</h6>
                            <b>${navCart.price}</b>
                          </div>
                          <div className="btns">
                            <button
                              className="btn border-0"
                              onClick={() => addAndremove(navCart, 1)}
                            >
                              +
                            </button>
                            <span>{navCart.count}</span>
                            <button
                              className="btn border-0"
                              onClick={() => addAndremove(navCart, -1)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="navtocart text-center">
                <button>
                  <Link to="/Cart" className="btn border-0">
                    View Cart
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mobliephone">
        <section className="nbar">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <a class="navbar-brand logoImage" href="#">
                <img src={require("./Image/logo.png")} />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav text-end">
                  <li class="nav-item">
                    <Link to="/" className="nav-link active text-light">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/Product" className="nav-link text-light">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/Cart" className="nav-link text-light">
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>

      <Outlet />
    </div>
  );
};
