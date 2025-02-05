const pattern4 = "assets/images/background/pattern-4.png";
const price1 = "assets/images/background/price-1";
const price1_1 = "assets/images/background/price-1-1.png";
const price2 = "assets/images/background/price-2";
const price2_1 = "assets/images/background/price-2-1.png";
const price3 = "assets/images/background/price-3";
const price3_1 = "assets/images/background/price-3-1.png";
export default function PriceOne() {
    return (
        <>
            {/* <!-- Price One --> */}
            <section className="price-one">
                <div className="price-one_pattern"  style={{ backgroundImage: `url(${pattern4})` }}></div>
                <div className="auto-container">
                    <div className="sec-title title-anim centered">
                        <div className="sec-title_title">Conference Ticket Price</div>
                        <h2 className="sec-title_heading">Conference Tickets Now </h2>
                    </div>
                    <div className="row clearfix">

                        {/* <!-- Price Block One --> */}
                        <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="price-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="price-block_one-pattern"  style={{ backgroundImage: `url(${price1})` }}></div>
                                <div className="price-block_one-pattern-two"  style={{ backgroundImage: `url(${price1_1})` }}></div>
                                <div className="price-block_one-title">Standard Pass</div>
                                <div className="price-block_one-price">$120 <span>1 DAY</span></div>
                                <ul className="price-block_one-options">
                                    <li><strong>Full Conference</strong>(Includes workshop, coffee etc)</li>
                                    <li className="light"><strong>Live Videos</strong>(Can access online free)</li>
                                    <li className="light"><strong>Meet Speaker</strong>(Ask questions privately)</li>
                                </ul>
                                <div className="price-block_one-button">
                                    <a href="speaker-detail.html" className="theme-btn btn-style-two">
                                        <span className="btn-wrap">
                                            <span className="text-one">Buy Ticket</span>
                                            <span className="text-two">Buy Ticket</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="price-block_one-charges">Our prices includes 10% charges</div>
                            </div>
                        </div>

                        {/* <!-- Price Block One --> */}
                        <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="price-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="price-block_one-pattern"  style={{ backgroundImage: `url(${price2})` }}></div>
                            <div className="price-block_one-pattern-two"  style={{ backgroundImage: `url(${price2_1})` }}></div>
                                <div className="price-block_one-title">Flexible Pass</div>
                                <div className="price-block_one-price">$220 <span>2 DAY</span></div>
                                <ul className="price-block_one-options">
                                    <li><strong>Full Conference</strong>(Includes workshop, coffee etc)</li>
                                    <li><strong>Live Videos</strong>(Can access online free)</li>
                                    <li className="light"><strong>Meet Speaker</strong>(Ask questions privately)</li>
                                </ul>
                                <div className="price-block_one-button">
                                    <a href="speaker-detail.html" className="theme-btn btn-style-two">
                                        <span className="btn-wrap">
                                            <span className="text-one">Buy Ticket</span>
                                            <span className="text-two">Buy Ticket</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="price-block_one-charges">Our prices includes 10% charges</div>
                            </div>
                        </div>

                        {/* <!-- Price Block One --> */}
                        <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="price-block_one-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                               <div className="price-block_one-pattern"  style={{ backgroundImage: `url(${price3})` }}></div>
                               <div className="price-block_one-pattern-two"  style={{ backgroundImage: `url(${price3_1})` }}></div>
                                <div className="price-block_one-title">Business Pass</div>
                                <div className="price-block_one-price">$320 <span>3 DAY</span></div>
                                <ul className="price-block_one-options">
                                    <li><strong>Full Conference</strong>(Includes workshop, coffee etc)</li>
                                    <li><strong>Live Videos</strong>(Can access online free)</li>
                                    <li><strong>Meet Speaker</strong>(Ask questions privately)</li>
                                </ul>
                                <div className="price-block_one-button">
                                    <a href="speaker-detail.html" className="theme-btn btn-style-two">
                                        <span className="btn-wrap">
                                            <span className="text-one">Buy Ticket</span>
                                            <span className="text-two">Buy Ticket</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="price-block_one-charges">Our prices includes 10% charges</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- End Price One --> */}
        </>
    )
}