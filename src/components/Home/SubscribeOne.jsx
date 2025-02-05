const pattern12 = "assets/images/background/pattern-12.png";
const pattern13 = "assets/images/background/pattern-13.png";
const pattern14 = "assets/images/background/pattern-14.png";
export default function SubscribeOne() {
    return (
        <>
            {/* <!-- Subscribe One --> */}
            <section className="subscribe-one">
                <div className="subscribe-one_pattern-three" data-parallax='{"y" : 50}'  style={{ backgroundImage: `url(${pattern14})` }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="subscribe-one_pattern"  style={{ backgroundImage: `url(${pattern12})` }}></div>
                        <div className="subscribe-one_pattern-two"  style={{ backgroundImage: `url(${pattern13})` }}></div>
                        <div className="row clearfix">
                            <div className="subscribe-one_title-column col-lg-6 col-md-12 col-sm-12">
                                <div className="subscribe-one_title">Get The Latest Updates</div>
                                <h3 className="subscribe-one_heading">Signup For Newsletter</h3>
                            </div>

                            {/* <!-- Form Column --> */}
                            <div className="form-column col-lg-6 col-md-12 col-sm-12">
                                {/* <!-- Subscribe Box --> */}
                                <div className="subscribe-box">
                                    <form method="post" action="contact.html">
                                        <div className="form-group">
                                            <input type="email" name="search-field" value="" placeholder="Your Email Address ........" required />
                                                <button type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Subscribe One --> */}
        </>
    )
}