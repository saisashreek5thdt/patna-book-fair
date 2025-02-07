// const sponsorImg = "assets/images/sponsor.png";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function ClientOne() {
  const sponsorsImg = [
    {
      id: 1,
      imgURL:"assets/images/sponsor.png",
    },
    {
      id: 2,
      imgURL:"assets/images/sponsor.png",
    },
    {
      id: 3,
      imgURL: "assets/images/sponsor.png",
    },
    {
      id: 4,
      imgURL: "assets/images/sponsor.png",
    },
    {
      id: 5,
      imgURL: "assets/images/sponsor.png",
    },
    {
      id: 6,
      imgURL: "assets/images/sponsor.png",
    },
    {
      id: 7,
      imgURL: "assets/images/sponsor.png",
    },
    {
      id: 8,
      imgURL: "assets/images/sponsor.png",
    },
    {
      id: 9,
      imgURL: "assets/images/sponsor.png",
    },
    {
      id: 10,
      imgURL: "assets/images/sponsor.png",
    },
  ];

  return (
    <>
      {/* <!-- Clients One --> */}
      <section className="clients-one">
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Sponsors and Exhibitors</div>
            <h2 className="sec-title_heading">Appreciate Our Kind Partners</h2>
          </div>
          <div className="row clearfix">
            <Swiper
              className="swiper"
              slidesPerView={4}
              spaceBetween={2}
              loop={true}
              autoplay={{
                delay: 3000, // Adjust delay time (3 seconds here)
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                320: { slidesPerView: 1 }, // Mobile view shows 1 slide
                768: { slidesPerView: 2 }, // Tablet view shows 2 slides
                1024: { slidesPerView: 4 }, // Desktop view shows 3 slides
              }}
            >
              {sponsorsImg.map((sponsor, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="clients-one_column col-lg-12 col-md-4 col-sm-6"
                  >
                    <a href="#">
                      <img src={sponsor.imgURL} alt="" />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <!-- Client Column --> */}
            {/* <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
                            <a href="#"><img src={sponsorImg} alt="" /></a>
                        </div> */}

            {/* <!-- Client Column --> */}
            {/* <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
                            <a href="#"><img src={sponsorImg} alt="" /></a>
                        </div> */}

            {/* <!-- Client Column --> */}
            {/* <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
                            <a href="#"><img src={sponsorImg} alt="" /></a>
                        </div> */}

            {/* <!-- Client Column --> */}
            {/* <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
                            <a href="#"><img src={sponsorImg} alt="" /></a>
                        </div> */}

            {/* <!-- Client Column --> */}
            {/* <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
                            <a href="#"><img src={sponsorImg} alt="" /></a>
                        </div> */}

            {/* <!-- Client Column --> */}
            {/* <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
                            <a href="#"><img src={sponsorImg} alt="" /></a>
                        </div> */}

            {/* <!-- Client Column --> */}
            {/* <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
                            <a href="#"><img src={sponsorImg} alt="" /></a>
                        </div> */}
          </div>
        </div>
      </section>
      {/* <!-- End Clients One --> */}
    </>
  );
}

{
  /* <div className="col-6 col-md-2" style={{ width: "100%", objectFit: "cover" }}>
                      <img src={sponsor.imgURL} alt="thumb" />
                    </div> */
}
