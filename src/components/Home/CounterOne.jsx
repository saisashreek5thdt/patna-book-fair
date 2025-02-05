

export default function CounterOne(){

  return (
    <section className="counter-one">
      <div className="auto-container">
        <div className="inner-container">
          {/* Background Image */}
          <div
            className="counter-one_image"
            style={{ backgroundImage: "url(assets/images/background/1.jpg)" }}
          ></div>

          {/* Counter Columns */}
          <div className="row clearfix">
            {/* Speakers */}
            <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
              <div className="counter-one_inner">
                <div className="counter-one_counter">
                  <span
                    className="odometer"
                    data-count="124"
                  ></span>
                  +
                </div>
                <div className="counter-one_text">Speakers</div>
              </div>
            </div>

            {/* Attendance */}
            <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
              <div className="counter-one_inner">
                <div className="counter-one_counter">
                  <span
                    className="odometer"
                    data-count="1140"
                  ></span>
                </div>
                <div className="counter-one_text">Attendance</div>
              </div>
            </div>

            {/* Workshops */}
            <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
              <div className="counter-one_inner">
                <div className="counter-one_counter">
                  <span
                    className="odometer"
                    data-count="8"
                  ></span>
                  HR
                </div>
                <div className="counter-one_text">Workshops</div>
              </div>
            </div>

            {/* Guests */}
            <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
              <div className="counter-one_inner">
                <div className="counter-one_counter">
                  <span
                    className="odometer"
                    data-count="205"
                  ></span>
                  +
                </div>
                <div className="counter-one_text">Guests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
