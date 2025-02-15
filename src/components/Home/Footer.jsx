export default function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="main-footer">
        <div className="auto-container">
          {/* <!-- Widgets Section --> */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* <!-- Big Column --> */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="footer-column">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/images/logo.png" alt="" title="" />
                      </a>
                    </div>
                    
                  </div>
                  <div className="footer-text">
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis maiores suscipit sunt nobis ratione natus est
                    iusto quia numquam et? Aspernatur perferendis, optio
                    molestiae laudantium nostrum dolores nihil voluptates amet. */}
                    <div className="footer-social_list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-x-twitter"
                      ></a>
                      <a
                        href="https://linkedin.com/"
                        className="twitter fa-brands fa-linkedin"
                      ></a>
                      <a
                        href="https://instagram.com/"
                        className="twitter fa-brands fa-instagram"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Big Column --> */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="footer-column">
                  <div className="row clearfix">
                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                      <span className="footer-info-icon flaticon-placeholder-1"></span>
                      <h6 className="footer-info_title">ADDRESS</h6>
                      <div className="footer-info_text"> Mumbai, India</div>
                    </div>
                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                      <span className="footer-info-icon flaticon-message"></span>
                      <h6 className="footer-info_title">MAIL TO US</h6>
                      <div className="footer-info_text">
                        infoMumbai@gmail.com <br /> (+91)99999 99999
                      </div>
                    </div>
                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                      <span className="footer-info-icon flaticon-clock"></span>
                      <h6 className="footer-info_title">TIMEING</h6>
                      <div className="footer-info_text">
                        Mon - Fri 09am - 06pm Sunday is off Now.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row clearfix">
              {/* <!-- Column --> */}
              <div className="column col-lg-6 col-md-12 col-sm-12">
                <div className="copyright">
                  &copy; 2025 5th Dimension Technologies{" "}
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="column col-lg-6 col-md-12 col-sm-12">
                <ul className="footer-bottom-nav">
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </>
  );
}
