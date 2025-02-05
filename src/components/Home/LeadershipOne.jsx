const pattern10 = 'assets/images/main-slider/pattern-10.png';
const Icon1 = 'assets/images/icons/icon-1.png';
const Icon2 = 'assets/images/icons/icon-2.png';
const Icon3 = 'assets/images/icons/icon-3.png';
const Icon4 = 'assets/images/icons/icon-4.png';
export default function LeadershipOne(){
    return(
    <>
       {/* <!-- Leadership One --> */}
	<section className="leadership-one">
		<div className="leadership-one_icon" style={{ backgroundImage: `url(${Icon1})` }} ></div>
		<div className="leadership-one_icon-two" style={{ backgroundImage: `url(${Icon2})` }}></div>
		<div className="leadership-one_icon-three" style={{ backgroundImage: `url(${Icon3})` }}></div>
		<div className="leadership-one_icon-four" style={{ backgroundImage: `url(${Icon4})` }}></div>
		<div className="leadership-one_icon-five" data-parallax='{"y" : 100}' style={{ backgroundImage: `url(${pattern10})` }}></div>
		<div className="auto-container">
			<div className="sec-title title-anim centered">
				<div className="sec-title_title">Thought Leadership</div>
				<h2 className="sec-title_heading">Join The World&apos;s Leading Companies <br/> at Technology Conference</h2>
			</div>
			{/* <!-- Leadership Info Tabs --> */}
			<div className="leadership-info-tabs">
				{/* <!-- Leadership Tabs --> */}
				<div className="leadership-tabs tabs-box">
				
					{/* <!-- Tab Btns --> */}
					<ul className="tab-btns tab-buttons clearfix">
						<li data-tab="#event-one" className="tab-btn active-btn">First Day <span>January 5, 2022</span></li>
						<li data-tab="#event-two" className="tab-btn">second day <span>January 6, 2022</span></li>
						<li data-tab="#event-three" className="tab-btn">Thired Day <span>January 7, 2022</span></li>
						<li data-tab="#event-four" className="tab-btn">Forth Day <span>January 8, 2022</span></li>
					</ul>
					
					{/* <!-- Tabs Container --> */}
					<div className="tabs-content">
						
						{/* <!-- Tab / Active Tab --> */}
						<div className="tab active-tab" id="event-one">
							<div className="content">

								{/* <!-- Leadership One Ship --> */}
								<div className="leadership-one_block">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-1.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Paul Wilson</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Registration For Opening Workshop</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>

								{/* <!-- Leadership One Ship / Style Two --> */}
								<div className="leadership-one_block style-two">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-2.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Ashli Scroggy</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Modern Marketing Summit Sydney 2024</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>

								{/* <!-- Leadership One Ship --> */}
								<div className="leadership-one_block">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-3.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Robert Gates</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Introduction About Speakers</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>

							</div>
						</div>

						{/* <!-- Tab --> */}
						<div className="tab" id="event-two">
							<div className="content">
								{/* <!-- Leadership One Ship / Style Two --> */}
								<div className="leadership-one_block style-two">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-2.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Ashli Scroggy</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Modern Marketing Summit Sydney 2024</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>

								{/* <!-- Leadership One Ship --> */}
								<div className="leadership-one_block">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-3.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Robert Gates</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Introduction About Speakers</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						{/* <!-- Tab --> */}
						<div className="tab" id="event-three">
							<div className="content">
								{/* <!-- Leadership One Ship --> */}
								<div className="leadership-one_block">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-1.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Paul Wilson</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Registration For Opening Workshop</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>

								{/* <!-- Leadership One Ship / Style Two --> */}
								<div className="leadership-one_block style-two">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-2.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Ashli Scroggy</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Modern Marketing Summit Sydney 2024</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>

								{/* <!-- Leadership One Ship --> */}
								<div className="leadership-one_block">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-3.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Robert Gates</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Introduction About Speakers</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Tab --> */}
						<div className="tab" id="event-four">
							<div className="content">
								
								{/* <!-- Leadership One Ship / Style Two --> */}
								<div className="leadership-one_block style-two">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-2.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Ashli Scroggy</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Modern Marketing Summit Sydney 2024</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>

								{/* <!-- Leadership One Ship --> */}
								<div className="leadership-one_block">
									<div className="leadership-one_block-inner">
										<div className="leadership-one_block-content">
											<div className="leadership-one_block-image">
												<img src="assets/images/resource/leadership-3.jpg" alt="" />
												<div className="leadership-one_block-icon flaticon-voice"></div>
											</div>
											<div className="leadership-one_block-time">9:00 am   --   11:00 am</div>
											<div className="leadership-one_block-name">Robert Gates</div>
											<h3 className="leadership-one_block-title"><a href="speaker-detail.html">Introduction About Speakers</a></h3>
											<div className="leadership-one_block-text">We&apos;re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					
					</div>

				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Leadership One --> */}
    </>
    );
}