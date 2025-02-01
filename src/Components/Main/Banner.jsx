import bannerImg1 from "../../assets/img/banner-bg-1.jpg";

export default function Banner() {
  const bannerBGImg1 = {
    backgroundImage: `url(${bannerImg1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="et-banner relative bg-etBlue">
        <div className="et-banner-slider swiper">
          <div className="swiper-wrapper">
            {/* Single Slide */}
            <div className="swiper-slide">
              <div
                className="bg-no-repeat bg-cover bg-center pt-[clamp(150px,17.3vw,333px)] pb-[clamp(120px,22vw,422px)] text-white relative overflow-hidden z-[1] before:content-normal before:absolute before:inset-0 before:bg-etBlue/40 before:-z-[1]"
                style={bannerBGImg1}
              >
                <div className="mx-[15.5em] xxxl:mx-[10em] xxl:mx-[40px] xs:mx-[12px]">
                  <div className="flex md:flex-col items-center justify-between gap-x-[30px] gap-y-[30px] md:grid-cols-1">
                    <div className="left relative z-[20] w-[55%] md:w-full">
                      <h6 className="font-kalam font-bold text-[2.4rem] mb-[3px] anim-text">
                        Business expo 2024
                      </h6>

                      <h1 className="text-[clamp(42px,6.25vw,12rem)] font-semibold leading-[1.1] mb-[36px] md:mb-[36px] anim-text">
                        Big Conference
                        <span className="font-normal tracking-tighter">
                          & Workshop
                        </span>
                      </h1>

                      <div className="et-banner-btns flex flex-wrap items-center gap-[20px]">
                        <a
                          href="contact.html"
                          className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full hover:!bg-white hover:!text-etBlue"
                        >
                          Register Now
                        </a>

                        <a
                          href="#"
                          className="et-btn bg-white inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-etBlue font-normal text-[17px] rounded-full"
                        >
                          View More
                        </a>
                      </div>

                      {/* Vectors */}
                      <div className="et-banner-vectors">
                        <div className="absolute left-[457px] bottom-[calc(100%+40px)]">
                          <img
                            src="assets/img/banner-vector.png"
                            alt="vector"
                            className="w-[45px] h-[45px]"
                          />
                        </div>
                        <div className="absolute bottom-0 right-[6px]">
                          <img
                            src="assets/img/banner-vector.png"
                            alt="vector"
                            className="w-[21px] h-[21px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Video Button */}
                    <div className="et-banner-video-btn w-[40%] md:w-full shrink-0">
                      <a
                        href="https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s"
                        data-fslightbox="banner-video-1"
                        className="w-[135px] aspect-square rounded-full border border-white/20 flex justify-center items-center text-etBlue ml-auto mr-[230px] lg:mr-[150px] md:mr-auto md:ml-0 relative z-[1] text-[18px] before:absolute before:w-[70px] before:h-[70px] before:bg-white before:rounded-full before:-z-[1] before:transition before:duration-[400ms] hover:text-white hover:before:bg-etBlue hover:border-etBlue"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Title */}
                <span className="et-banner-bottom-title text-[clamp(30px,13vw,250px)] font-bold text-white/10 text-center block absolute bottom-[40px] left-0 w-full">
                  BUSINESS EXPO
                </span>
              </div>
            </div>

            {/* Single Slide */}
            <div className="swiper-slide">
              <div className="bg-no-repeat bg-cover bg-[url('../assets/img/banner-bg-2.jpg')] bg-center pt-[clamp(150px,17.3vw,333px)] pb-[clamp(120px,22vw,422px)] text-white relative overflow-hidden z-[1] before:content-normal before:absolute before:inset-0 before:bg-etBlue/40 before:-z-[1]">
                <div className="mx-[15.5em] xxxl:mx-[10em] xxl:mx-[40px] xs:mx-[12px]">
                  <div className="flex md:flex-col items-center justify-between gap-x-[30px] gap-y-[30px] md:grid-cols-1">
                    <div className="left relative z-[20] w-[55%] md:w-full">
                      <h6 className="font-kalam font-bold text-[2.4rem] mb-[3px] anim-text">
                        Business expo 2024
                      </h6>

                      <h1 className="text-[clamp(42px,6.25vw,12rem)] font-semibold leading-[1.1] mb-[36px] md:mb-[36px] anim-text">
                        Big Conference
                        <span className="font-normal tracking-tighter">
                          & Workshop
                        </span>
                      </h1>

                      <div className="et-banner-btns flex flex-wrap items-center gap-[20px]">
                        <a
                          href="contact.html"
                          className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full hover:!bg-white hover:!text-etBlue"
                        >
                          Register Now
                        </a>

                        <a
                          href="#"
                          className="et-btn bg-white inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-etBlue font-normal text-[17px] rounded-full"
                        >
                          View More
                        </a>
                      </div>

                      {/* Vectors */}
                      <div className="et-banner-vectors">
                        <div className="absolute left-[457px] bottom-[calc(100%+40px)]">
                          <img
                            src="assets/img/banner-vector.png"
                            alt="vector"
                            className="w-[45px] h-[45px]"
                          />
                        </div>
                        <div className="absolute bottom-0 right-[6px]">
                          <img
                            src="assets/img/banner-vector.png"
                            alt="vector"
                            className="w-[21px] h-[21px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Video Button */}
                    <div className="et-banner-video-btn w-[40%] md:w-full shrink-0">
                      <a
                        href="https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s"
                        data-fslightbox="banner-video-1"
                        className="w-[135px] aspect-square rounded-full border border-white/20 flex justify-center items-center text-etBlue ml-auto mr-[230px] lg:mr-[150px] md:mr-auto md:ml-0 relative z-[1] text-[18px] before:absolute before:w-[70px] before:h-[70px] before:bg-white before:rounded-full before:-z-[1] before:transition before:duration-[400ms] hover:text-white hover:before:bg-etBlue hover:border-etBlue"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Title */}
                <span className="et-banner-bottom-title text-[clamp(30px,13vw,250px)] font-bold text-white/10 text-center block absolute bottom-[40px] left-0 w-full">
                  BUSINESS EXPO
                </span>
              </div>
            </div>

            {/* Single Slide */}
            <div className="swiper-slide">
              <div className="bg-no-repeat bg-cover bg-[url('../assets/img/banner-bg-3.jpg')] bg-center pt-[clamp(150px,17.3vw,333px)] pb-[clamp(120px,22vw,422px)] text-white relative overflow-hidden z-[1] before:content-normal before:absolute before:inset-0 before:bg-etBlue/40 before:-z-[1]">
                <div className="mx-[15.5em] xxxl:mx-[10em] xxl:mx-[40px] xs:mx-[12px]">
                  <div className="flex md:flex-col items-center justify-between gap-x-[30px] gap-y-[30px] md:grid-cols-1">
                    <div className="left relative z-[20] w-[55%] md:w-full">
                      <h6 className="font-kalam font-bold text-[2.4rem] mb-[3px] anim-text">
                        Business expo 2024
                      </h6>

                      <h1 className="text-[clamp(42px,6.25vw,12rem)] font-semibold leading-[1.1] mb-[36px] md:mb-[36px] anim-text">
                        Big Conference
                        <span className="font-normal tracking-tighter">
                          & Workshop
                        </span>
                      </h1>

                      <div className="et-banner-btns flex flex-wrap items-center gap-[20px]">
                        <a
                          href="contact.html"
                          className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full hover:!bg-white hover:!text-etBlue"
                        >
                          Register Now
                        </a>

                        <a
                          href="#"
                          className="et-btn bg-white inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-etBlue font-normal text-[17px] rounded-full"
                        >
                          View More
                        </a>
                      </div>

                      {/* Vectors */}
                      <div className="et-banner-vectors">
                        <div className="absolute left-[457px] bottom-[calc(100%+40px)]">
                          <img
                            src="assets/img/banner-vector.png"
                            alt="vector"
                            className="w-[45px] h-[45px]"
                          />
                        </div>
                        <div className="absolute bottom-0 right-[6px]">
                          <img
                            src="assets/img/banner-vector.png"
                            alt="vector"
                            className="w-[21px] h-[21px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Video Button */}
                    <div className="et-banner-video-btn w-[40%] md:w-full shrink-0">
                      <a
                        href="https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s"
                        data-fslightbox="banner-video-1"
                        className="w-[135px] aspect-square rounded-full border border-white/20 flex justify-center items-center text-etBlue ml-auto mr-[230px] lg:mr-[150px] md:mr-auto md:ml-0 relative z-[1] text-[18px] before:absolute before:w-[70px] before:h-[70px] before:bg-white before:rounded-full before:-z-[1] before:transition before:duration-[400ms] hover:text-white hover:before:bg-etBlue hover:border-etBlue"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Title */}
                <span className="et-banner-bottom-title text-[clamp(30px,13vw,250px)] font-bold text-white/10 text-center block absolute bottom-[40px] left-0 w-full">
                  BUSINESS EXPO
                </span>
              </div>
            </div>
          </div>

          <div className="et-banner-slider-dots absolute flex flex-col right-[40px] xxs:right-[15px] !left-auto z-[1] !top-[50%] -translate-y-[50%] !w-auto"></div>
        </div>
      </section>
    </>
  );
}
