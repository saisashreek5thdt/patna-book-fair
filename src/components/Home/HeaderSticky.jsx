
const language = 'assets/images/language_icon.svg'
export default function HeaderSticky() {
    return (
        <>
            {/* <!-- Sticky Header  --> */}
            <div className="sticky-header">
                <div className="auto-container">
                    <div className="inner-container d-flex justify-content-between align-items-center flex-wrap">

                        {/* <!-- Logo --> */}
                        <div className="logo">
                            <a href="index.html" title=""><img src="assets/images/logo-small.png" alt="" title="" /></a>
                        </div>

                        {/* <!-- Right Box --> */}
                        <div className="right-box">
                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu">
                                {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                            </nav>
                            {/* <!-- Main Menu End--> */}
                        </div>

                        {/* <!-- Main Menu End--> */}
                        <div className="outer-box d-flex align-items-center flex-wrap">

                            {/* <!-- Search Btn --> */}
                            {/* <div className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div> */}
                            <div className="language-icon " >
                                <img src={language} alt="" />
                            </div>
                           
               
                            {/* <!-- Nav Btn --> */}
                            {/* <div className="nav-btn navSidebar-button fa-regular fa-cart-shopping fa-fw"></div>

                            <div className="appointmeny_button-box">
                                <a href="speaker-detail.html" className="theme-btn btn-style-one">
                                    <span className="btn-wrap">
                                        <span className="text-one">Buy Ticket</span>
                                        <span className="text-two">Buy Ticket</span>
                                    </span>
                                </a>
                            </div> */}

                            {/* <!-- Mobile Navigation Toggler --> */}
                            <div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
                        </div>

                    </div>
                </div>
                {/* <!-- End Sticky Menu --> */}
            </div>
        </>
    );
}