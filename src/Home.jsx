import {
  Header,
  Sidebar,
  Slider,
  About,
  SpeakerOne
} from "./components";

export default function Home() {
  return (
    <>

      {/* Header Section Start */}
      <Header />
      {/* Header Section End */}
      {/* Sidebar Section Start */}
       <Sidebar/>
      {/* Sidebar Section End */}
       {/* Slider Section Start */}
       <Slider/>
      {/* Slider Section End */}
      {/*  About One Start*/}
      <About/>
      {/*  About One End*/}
      {/*  About One Start*/}
      <SpeakerOne/>
      {/*  About One End*/}
    </>
  );
}