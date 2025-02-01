import { Sidebar, Header, Banner, AboutSection } from "../Components/index";

export default function Home() {
  return (
    <>
      {/* Overlay Start */}
      <div className="et-overlay group">
        <div className="opacity-0 pointer-events-none group-[.active]:opacity-100 group-[.active]:pointer-events-auto transition ease-linear duration-300 bg-etBlack/80 fixed inset-0 z-[60]"></div>
      </div>
      {/* Overlay End */}
      {/* Sidebar Start */}
      <Sidebar />
      {/* Sidebar End */}
      {/* Header Start */}
      <Header />
      {/* Header End */}
      {/* Main Content Start */}
      <main>
        {/* Banner Section Start */}
        <Banner />
        {/* Banner Section End */}
        {/* About Section Start */}
        <AboutSection />
        {/* About Section End */}
      </main>
      {/* Main Content End */}
    </>
  );
}
