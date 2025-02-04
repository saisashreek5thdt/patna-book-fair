export default function Header(){
    return (
       <>
         <header className="main-header">
		{/* <!-- Header Upper --> */}
		
		<div className="header-upper">
			<div className="auto-container">
				<div className="d-flex justify-content-between align-items-center flex-wrap">
					
					<div className="logo-box">
						<div className="logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title=""/></a></div>
					</div>
					
					<div className="nav-outer">
						
                        {/* <!-- Main Menu --> */}
						<nav className="main-menu navbar-expand-md">
							<div className="navbar-header">
								
                                   	{/* <!-- Toggle Button -->  */}
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
							
							<div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
								<ul className="navigation clearfix">
									<li className="dropdown"><a href="#">Home</a>
										<ul>
											<li><a href="index.html">Homepage 01</a></li>
											<li><a href="index-2.html">Homepage 02</a></li>
											<li><a href="index-3.html">Homepage 03</a></li>
											<li><a href="index-4.html">Homepage 04</a></li>
											<li><a href="index-5.html">Homepage 05</a></li>
											<li><a href="index-6.html">Homepage 06</a></li>
											<li className="dropdown"><a href="#">One Pager Style</a>
												<ul>
													<li><a href="index-1.html">HomePage 01</a></li>
													<li><a href="index-2-1.html">HomePage 02</a></li>
													<li><a href="index-3-1.html">HomePage 03</a></li>
													<li><a href="index-4-1.html">HomePage 04</a></li>
													<li><a href="index-5-1.html">HomePage 05</a></li>
													<li><a href="index-6-1.html">HomePage 06</a></li>
												</ul>
											</li>
											<li className="dropdown"><a href="#">Header Styles</a>
												<ul>
													<li><a href="index.html">Header 01</a></li>
													<li><a href="index-2.html">Header 02</a></li>
													<li><a href="index-3.html">Header 03</a></li>
													<li><a href="index-4.html">Header 04</a></li>
													<li><a href="index-5.html">Header 05</a></li>
													<li><a href="index-6.html">Header 06</a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">About</a>
										<ul>
											<li><a href="about.html">About us</a></li>
											<li><a href="faq.html">Faq&apos;s</a></li>
											<li><a href="price.html">Price</a></li>
											<li><a href="schedule.html">Schedule</a></li>
											<li><a href="gallery.html">Gallery</a></li>

											<li><a href="testimonial.html">Testimonial</a></li>
											<li><a href="coming-soon.html">Coming Soon</a></li>
											<li><a href="terms.html">Terms & Condition</a></li>
											<li><a href="privacy.html">Privacy & Policy</a></li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">Speakers</a>
										<ul>
											<li><a href="speaker.html">Speaker</a></li>
											<li><a href="speaker-detail.html">Speaker Detail</a></li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">Events</a>
										<ul>
											<li><a href="event.html">Events</a></li>
											<li><a href="event-detail.html">Events Detail</a></li>
											<li><a href="register.html">Account</a></li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">Shop</a>
										<ul>
											<li><a href="shop.html">Shop</a></li>
											<li><a href="shop-single.html">Shop Detail</a></li>
											<li><a href="shoping-cart.html">Shoping Cart</a></li>
											<li><a href="checkout.html">Checkout</a></li>
											<li><a href="login.html">Account</a></li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">Blog</a>
										<ul>
											<li><a href="blog.html">Our Blog</a></li>
											<li><a href="blog-left-sidebar.html">Blog left Sidebar</a></li>
											<li><a href="blog-classic.html">Blog Classic</a></li>
											<li><a href="blog-detail.html">Blog Detail</a></li>
											<li><a href="not-found.html">Not Found</a></li>
										</ul>
									</li>
									<li className="dropdown"><a href="#">Contact</a>
										<ul>
											<li><a href="contact.html">Contact 01</a></li>
											<li><a href="contact-2.html">Contact 02</a></li>
											<li><a href="contact-3.html">Contact 03</a></li>
										</ul>
									</li>
								</ul>
							</div>
						</nav>
					</div>
					
					
                    {/* <!-- Main Menu End--> */}
					<div className="outer-box d-flex align-items-center flex-wrap">
						
						{/* <!-- Search Btn --> */}
						<div className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div>
						
						{/* <!-- Nav Btn --> */}
						<div className="nav-btn navSidebar-button fa-regular fa-cart-shopping fa-fw"></div>
						
						<div className="appointmeny_button-box">
							<a href="speaker-detail.html" className="theme-btn btn-style-one">
								<span className="btn-wrap">
									<span className="text-one">Buy Ticket</span>
									<span className="text-two">Buy Ticket</span>
								</span>
							</a>
						</div>

						{/* <!-- Mobile Navigation Toggler --> */}
						<div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
					</div>

				</div>
			</div>
		</div>
		{/* <!--End Header Upper--> */}
		
		{/* <!-- Sticky Header  --> */}
		<div className="sticky-header">
			<div className="auto-container">
				<div className="inner-container d-flex justify-content-between align-items-center flex-wrap">
				
				{/* <!-- Logo --> */}
				<div className="logo">
					<a href="index.html" title=""><img src="assets/images/logo-small.png" alt="" title=""/></a>
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
					<div className="search-box-btn search-box-outer"><span className="icon fa fa-search"></span></div>
					
					{/* <!-- Nav Btn --> */}
					<div className="nav-btn navSidebar-button fa-regular fa-cart-shopping fa-fw"></div>
					
					<div className="appointmeny_button-box">
						<a href="speaker-detail.html" className="theme-btn btn-style-one">
							<span className="btn-wrap">
								<span className="text-one">Buy Ticket</span>
								<span className="text-two">Buy Ticket</span>
							</span>
						</a>
					</div>

					{/* <!-- Mobile Navigation Toggler --> */}
					<div className="mobile-nav-toggler"><span className="icon flaticon-menu"></span></div>
				</div>
				
			</div>
		</div>
        {/* <!-- End Sticky Menu --> */}
		</div>
		
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
	
	</header>
       </>
    );   
}