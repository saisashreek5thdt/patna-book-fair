import {
  Header,
  Sidebar,
  Slider,
  About,
  SpeakerOne,
  CounterOne,
  FeatureOne,
  LeadershipOne,
  GalleryOne,
  // PriceOne,
  VideoOne,
  ClientOne,
  // NewsOne,
  // SubscribeOne,
  Footer,
  SearchPopup,
  FAQsection
} from "./components";

export default function Home() {
  return (
    <>
      <div className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Header Section Start */}
          <Header />
          {/* Header Section End */}
          {/* Sidebar Section Start */}
          <Sidebar />
          {/* Sidebar Section End */}
          {/* Slider Section Start */}
          <Slider />
          {/* Slider Section End */}
          {/*  About One Start*/}
          <About />
          {/*  About One End*/}
          {/*  CounterOne One Start*/}
          <CounterOne />
          {/*  CounterOne One End*/}
          {/*  Speaker One Start*/}
          <SpeakerOne />
          {/*  Speaker One End*/}
          {/*  FeatureOne Start*/}
          <FeatureOne />
          {/*  FeatureOne End*/}
          {/*  LeadershipOne Start*/}
          <LeadershipOne />
          {/*  LeadershipOne End*/}
          {/*  GalleryOne Start*/}
          <GalleryOne/>
          {/*  GalleryOne End*/}
          {/*  PriceOne Start*/}
          {/* <PriceOne /> */}
          {/*  PriceOne End*/}
          <FAQsection/>
          {/*  VideoOne Start*/}
          <VideoOne />
          {/*  VideoOne End*/}
          {/*  ClientOne Start*/}
          <ClientOne />
          {/*  clientOne End*/}
          {/*  NewsOne Start*/}
          {/* <NewsOne /> */}
          {/*  NewsOne End*/}
          {/*  SubscribeOne Start*/}
          {/* <SubscribeOne /> */}
          {/*  SubscribeOne End*/}
          <Footer />

          <SearchPopup />
        </div>
        

        {/* <!-- Back To Top Start --> */}
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* <!-- back to top end --> */}
      </div>
    </>
  );
}