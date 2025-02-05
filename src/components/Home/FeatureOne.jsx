const pattern7 = "assets/images/background/pattern-7.png";
const pattern8 = "assets/images/background/pattern-8.png";
const pattern9 = "assets/images/background/pattern-9.png";

export default function FeatureOne() {
    return (
        <>
            <section className="feature-one">
                <div className="feature-one_pattern" style={{ backgroundImage: `url(${pattern7})` }}></div>
                <div className="feature-one_pattern-two" style={{ backgroundImage: `url(${pattern8})` }}></div>
                <div className="feature-one_pattern-three" data-parallax='{"y" : 80}' style={{ backgroundImage: `url(${pattern9})` }}></div>
                <div className="auto-container">
                    <div className="sec-title title-anim">
                        <div className="sec-title_title">Our Features</div>
                        <h2 className="sec-title_heading">Features For Client</h2>
                    </div>
                    <div className="row clearfix">

                        {/* <!-- Feature Block One --> */}
                        <div className="feature-block_one col-lg-3 col-md-6 col-sm-12">
                            <div className="feature-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="feature-block_one-icon flaticon-policy"></div>
                                <h4 className="feature-block_one-title"><a href="event-detail.html">Best Certified Speaker</a></h4>
                                <a className="feature-block_one-more" href="event-detail.html">Read More</a>
                            </div>
                        </div>

                        {/* <!-- Feature Block One --> */}
                        <div className="feature-block_one col-lg-3 col-md-6 col-sm-12">
                            <div className="feature-block_one-inner wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1500ms">
                                <div className="feature-block_one-icon flaticon-digital-learning"></div>
                                <h4 className="feature-block_one-title"><a href="event-detail.html">Brand Digital <br/> Ideas</a></h4>
                                <a className="feature-block_one-more" href="event-detail.html">Read More</a>
                            </div>
                        </div>

                        {/* <!-- Feature Block One --> */}
                        <div className="feature-block_one col-lg-3 col-md-6 col-sm-12">
                            <div className="feature-block_one-inner wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="feature-block_one-icon flaticon-conversation-1"></div>
                                <h4 className="feature-block_one-title"><a href="event-detail.html">Communicate People</a></h4>
                                <a className="feature-block_one-more" href="event-detail.html">Read More</a>
                            </div>
                        </div>

                        {/* <!-- Feature Block One --> */}
                        <div className="feature-block_one col-lg-3 col-md-6 col-sm-12">
                            <div className="feature-block_one-inner wow fadeInUp" data-wow-delay="450ms" data-wow-duration="1500ms">
                                <div className="feature-block_one-icon flaticon-inspiration"></div>
                                <h4 className="feature-block_one-title"><a href="event-detail.html">Well Inspiring Keynotes</a></h4>
                                <a className="feature-block_one-more" href="event-detail.html">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}