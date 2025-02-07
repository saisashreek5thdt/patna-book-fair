const imageUrl1 = 'assets/images/main-slider/image-1.jpg';
const pattern1 = 'assets/images/main-slider/pattern-1.png';
const pattern2 = 'assets/images/main-slider/pattern-2.png';
export default function Slider() {
    return (
        <>
            {/* <!-- Slider One --> */}
            <section className="slider-one">
                <div className="slider-one_pattern-two" style={{ backgroundImage: `url(${pattern2})` }}></div>
                <div className="main-slider-carousel owl-carousel owl-theme">

                    {/* <!-- Slide 01 --> */}
                    <div className="slider-one_slide">
                        <div className="slider-one_image-layer" style={{ backgroundImage: `url(${imageUrl1})` }}></div>
                        <div className="slider-one_pattern" style={{ backgroundImage: `url(${pattern1})` }}></div>
                        <div className="auto-container">
                            {/* <!-- Content Column --> */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    <div className="slider-one_title">A Journey Through The Books</div>
                                    <div className="slider-one_date"><span>25</span> March <br /> 2024</div>
                                    <h1 className="slider-one_heading">Patna <br /> Book Fair</h1>
                                    <div className="slider-one_buttons">
                                        <a href="register.html" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                                <span className="text-one">Register now</span>
                                                <span className="text-two">Register now</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- End Slide 01 --> */}

                    {/* <!-- Slide 02 --> */}
                    <div className="slider-one_slide">
                        <div className="slider-one_image-layer" style={{ backgroundImage: `url(${imageUrl1})` }}></div>
                        <div className="slider-one_pattern" style={{ backgroundImage: `url(${pattern1})` }}></div>
                        <div className="auto-container">
                            {/* <!-- Content Column --> */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    {/* <div className="slider-one_title">North Harond Boston, Canada</div> */}
                                    <div className="slider-one_title">A Journey Through The Books</div>
                                    <div className="slider-one_date"><span>25</span> March <br /> 2024</div>
                                    <h1 className="slider-one_heading" style={{textTransform:"uppercase"}}>Patna <br /> Book Fair</h1>
                                    <div className="slider-one_buttons">
                                        <a href="register.html" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                                <span className="text-one">Register now</span>
                                                <span className="text-two">Register now</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- End Slide 02 --> */}

                    {/* <!-- Slide 03 --> */}
                    <div className="slider-one_slide">
                        <div className="slider-one_image-layer" style={{ backgroundImage: `url(${imageUrl1})` }}></div>
                        <div className="slider-one_pattern" style={{ backgroundImage: `url(${pattern1})` }}></div>
                        <div className="auto-container">
                            {/* <!-- Content Column --> */}
                            <div className="slider-one_content">
                                <div className="slider-one_content-inner">
                                    {/* <div className="slider-one_title">Patna Book Fair, India</div> */}
                                    <div className="slider-one_title">A Journey Through The Books</div>
                                    <div className="slider-one_date"><span>25</span> March <br /> 2024</div>
                                    <h1 className="slider-one_heading">Patna <br /> Book Fair</h1>
                                    <div className="slider-one_buttons">
                                        <a href="register.html" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                                <span className="text-one">Register now</span>
                                                <span className="text-two">Register now</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- End Slide 03 --> */}

                </div>

                {/* Timer Divs */}
                <div className="timer-container">
                    <div className="timer-box">
                        <span id="days" className="time-value">119</span>
                        <div className="time-label">Days</div>
                    </div>
                    <div className="timer-box">
                        <span id="hours" className="time-value">22</span>
                        <div className="time-label">Hours</div>
                    </div>
                    <div className="timer-box">
                        <span id="minutes" className="time-value">18</span>
                        <div className="time-label">Minutes</div>
                    </div>
                    <div className="timer-box">
                        <span id="seconds" className="time-value">44</span>
                        <div className="time-label">Seconds</div>
                    </div>
                </div>
            </section>
            {/* <!-- End Main Slider Section --> */}
        </>
    );
}