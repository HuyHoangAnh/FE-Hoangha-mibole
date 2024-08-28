import React from "react";

const Footer = () => {
  //! Props
  //! State
  const isMobile = window.innerWidth <= 768 ;
  //! Function
  //! Effect
  //! Render
  return (
    <div className=" mt-5">
      <footer
        className="text-center text-lg-start text-dark"
        style={{backgroundColor: "#ECEFF1"}}
      >
        <section
          className={`d-flex justify-content-between py-6 text-white ${!isMobile && "px-80"}`}
          style={{backgroundColor: "#21D192"}}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/hoanghamobilecom" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/hoanghamobile/?hl=vi" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCJm_GdFJzT8h1odq1oMu_7Q" className="text-white me-4">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@hoanghaangels?" className="text-white me-4">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
                <p>
                  <a href="#!" className="text-dark">
                    MDBootstrap
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    MDWordPress
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    BrandFlow
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Bootstrap Angular
                  </a>
                </p>
              </div>
              {/* <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
                <p>
                  <a href="#!" className="text-dark">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-dark">
                    Help
                  </a>
                </p>
              </div> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
                <p>
                  <i className="fas fa-home mr-3"></i> Hà Nội, Việt Nam
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> anhhuy8400@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i>  0123 456 789
                </p>
                {/* <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p> */}
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
