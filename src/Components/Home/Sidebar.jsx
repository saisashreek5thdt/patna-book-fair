import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-white.png";

export default function Sidebar() {
  return (
    <>
      <div className="et-sidebar group">
        <div className="group-[.active]:translate-x-0 translate-x-[100%] transition-transform ease-linear duration-300 fixed right-0 w-full max-w-[25%] xl:max-w-[30%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[60%] xxs:max-w-full bg-[#18377e] h-full z-[100] overflow-auto p-[50px] lg:p-[30px] space-y-[40px]">
          {/* Heading */}
          <div className="et-sidebar-heading">
            <div className="logo flex justify-between items-center">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>

              <button
                type="button"
                className="et-sidebar-close-btn border border-white/50 w-[45px] aspect-square shrink-0 text-white text-[22px] rounded-full hover:text-etBlue hover:bg-white"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="et-header-nav-in-mobile"></div>
        </div>
      </div>
    </>
  );
}
