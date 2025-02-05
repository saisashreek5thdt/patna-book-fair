export default function Sidebar() {
    return (
        <>
            <div className="xs-sidebar-group info-group">
                <div className="xs-overlay xs-bg-black"></div>
                <div className="xs-sidebar-widget">
                    <div className="sidebar-widget-container">
                        <div className="close-button">
                            <span className="flaticon-cancel-1"></span>
                        </div>
                        <div className="sidebar-textwidget">

                            {/* <!-- Sidebar Info Content --> */}
                            <div className="sidebar-info-contents">
                                <div className="content-inner">

                                    {/* <!-- Title Box --> */}
                                    <div className="title-box">
                                        <h5>Shopping <span>Bag</span></h5>
                                        <div className="price">$15 from free economy shipping</div>
                                    </div>

                                    {/* <!-- Empty Cart Box --> */}
                                    <div className="empty-cart-box">
                                        {/* <!-- No Product --> */}
                                        <div className="no-cart">
                                            <span className="icon fa fa-sharp fa-solid fa-cart-shopping fa-fw"></span>
                                            No products in cart.
                                        </div>
                                    </div>

                                    {/* <!-- Lower Box --> */}
                                    <div className="lower-box">
                                        <h5>Popular <span>Suggestions</span></h5>

                                        {/* <!-- Post Block --> */}
                                        <div className="post-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <img src="assets/images/resource/post-thumb-1.jpg" alt="" />
                                                </div>
                                                <h6><a href="#">Children Event</a></h6>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="price-box">$125</div>
                                                <a className="theme-btn bag-btn" href="#">add to bag</a>
                                            </div>
                                        </div>

                                        {/* <!-- Post Block --> */}
                                        <div className="post-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <img src="assets/images/resource/post-thumb-2.jpg" alt="" />
                                                </div>
                                                <h6><a href="#">Marriage Caremoney</a></h6>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="price-box">$205</div>
                                                <a className="theme-btn bag-btn" href="#">add to bag</a>
                                            </div>
                                        </div>

                                        {/* <!-- Post Block --> */}
                                        <div className="post-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <img src="assets/images/resource/post-thumb-3.jpg" alt="" />
                                                </div>
                                                <h6><a href="#">baby shower</a></h6>
                                                <div className="rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="price-box">$125</div>
                                                <a className="theme-btn bag-btn" href="#">add to bag</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}