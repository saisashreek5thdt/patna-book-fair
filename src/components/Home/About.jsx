const pattern3 = 'assets/images/main-slider/pattern-3.png';
const pattern2 = 'assets/images/main-slider/pattern-2.png';
const AboutPattern = "assets/images/background/about-pattern.png";
export default function About() {
    return (
        <>
            <section className="about-one">
                <div className="about-one_pattern-one" data-parallax='{"y" : 80}' style={{ backgroundImage: `url(${pattern2})` }}></div>
                <div className="about-one_pattern-two" data-parallax='{"y" : 120}' style={{ backgroundImage: `url(${pattern3})` }}></div>
                <div className="about-one_pattern-three" style={{ backgroundImage: `url(${pattern2})` }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* <!-- Image Column --> */}
                        <div className="about-one_image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="about-one_image-inner">
                                <div className="about-one_pattern-four" style={{ backgroundImage: `url(${AboutPattern})` }}></div>
                                <div className="about-one_image wow rollIn">
                                    <img src="assets/images/resource/about.jpg" alt="" />
                                </div>
                                <a href="https://www.youtube.com/watch?v=YS3PwmOQ1Fc" className="lightbox-video slider-one_play"><span className="fa fa-play"><i className="ripple"></i></span></a>
                            </div>
                        </div>
                        {/* <!-- Content Column --> */}
                        <div className="about-one_content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="about-one_content-inner">
                                <div className="sec-title title-anim">
                                    <div className="sec-title_title">About The Event</div>
                                    <h2 className="sec-title_heading">Patna Book Fair</h2>
                                </div>
                                {/* <div className="about-one_bold-text">Grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures together</div> */}
                                <div className="about-one_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, porro optio. Ducimus quasi aspernatur voluptate sed, enim ea rerum harum placeat ab libero officia laudantium deleniti facere eius reiciendis delectus, voluptatibus quas molestias ipsa aperiam voluptas. Corrupti debitis tenetur autem.</div>
                                <div className="about-one_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores at illo totam laudantium quidem officia aliquid obcaecati optio similique! Aliquid porro itaque sapiente voluptatibus a atque doloremque assumenda. Hic dolorem nulla numquam iste eligendi magni molestias! Velit sapiente soluta necessitatibus.</div>
                                <div className="row clearfix">
                                    {/* <!-- About One Block --> */}
                                    <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                                        <div className="about-one_block-inner">
                                            <span className="about-one_block-icon flaticon-map"></span>
                                            <strong>Venue</strong>
                                            Patna, India
                                        </div>
                                    </div>
                                    {/* <!-- About One Block --> */}
                                    <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                                        <div className="about-one_block-inner">
                                            <span className="about-one_block-icon flaticon-calendar-2"></span>
                                            <strong>Date</strong>
                                            March 1 to 5, 2025
                                        </div>
                                    </div>
                                </div>
                                <div className="about-one_button">
                                    {/* <a href="speaker-detail.html" className="theme-btn btn-style-one">
                                        <span className="btn-wrap">
                                            <span className="text-one">Buy Ticket</span>
                                            <span className="text-two">Buy Ticket</span>
                                        </span>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}