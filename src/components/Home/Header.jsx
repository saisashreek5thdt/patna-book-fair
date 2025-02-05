import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderSticky from "./HeaderSticky";
import NavbarRight from "./NavbarRight";
const language = 'assets/images/language_icon.svg'
export default function Header() {
    return (
        <>
            {/* <!-- Header Style One --> */}
            <header className="main-header">

                {/* <!-- Header Upper --> */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">

                            <div className="logo-box">
                                <div className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title="" /></a></div>
                            </div>

                            <div className="nav-outer">
                                {/* <!-- Main Menu --> */}
                                <nav className="main-menu navbar-expand-md">
                                    <div className="navbar-header">
                                        {/* <!-- Toggle Button -->    	 */}
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <NavbarRight />
                                </nav>
                            </div>

                            {/* <!-- Main Menu End--> */}
                            <div className="outer-box d-flex align-items-center flex-wrap">

                                {/* <!-- Search Btn --> */}
                                {/* <div className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div> */}
                                <div className="language-icon" >
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
                </div>
                {/* <!--End Header Upper--> */}
                <HeaderSticky />

                <HeaderMobileMenu />

            </header>
            {/* <!-- End Main Header --> */}
        </>
    );
}