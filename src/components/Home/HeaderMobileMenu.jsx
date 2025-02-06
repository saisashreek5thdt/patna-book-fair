export default function HeaderMobileMenu(){
    return(
        <>
            {/* <!-- Mobile Menu  --> */}
		<div className="mobile-menu">
			<div className="menu-backdrop"></div>
			<div className="close-btn"><span className="icon flaticon-cancel-1"></span></div>
			
			<nav className="menu-box">
				<div className="nav-logo"><a href="index.html"><img src="assets/images/logo-small.png" alt="" title=""/></a></div>
				<div className="menu-outer">
                {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                
                </div>
			</nav>
		</div>
        {/* <!-- End Mobile Menu --> */}
        </>
    )
}