// const pattern11 = "assets/images/background/pattern-11.png";
// const BG2 = "assets/images/background/2.jpg";
// const Icon1 = 'assets/images/icons/icon-1.png';
// const Icon2 = 'assets/images/icons/icon-2.png';
// const Icon3 = 'assets/images/icons/icon-3.png';
import "../../video.css";
export default function VideoOne() {
    return (
        <>
            {/* <!-- Video One --> */}
            <section className="video-one"  >
                {/* <div className="video-one_pattern-one" style={{ backgroundImage: `url(${pattern11})` }}></div>
                <div className="video-one_pattern-two"  style={{ backgroundImage: `url(${Icon3})` }}></div>
                <div className="video-one_pattern-three"  style={{ backgroundImage: `url(${Icon2})` }}></div>
                <div className="video-one_pattern-four"  style={{ backgroundImage: `url(${Icon1})` }}></div> */}
                <div className="video-background">
                    <iframe 
                        src="https://www.youtube.com/embed/YS3PwmOQ1Fc?autoplay=1&mute=1&controls=0&loop=1&playlist=YS3PwmOQ1Fc" 
                        title="Background Video" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="auto-container">
                    <div className="sec-title title-anim light centered">
                        <div className="sec-title_title">Lorem, ipsum dolor.</div>
                        <h2 className="sec-title_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto?</h2>
                        <a href="https://www.youtube.com/watch?v=YS3PwmOQ1Fc" className="lightbox-video video-one_play"></a>
                    </div>
                </div>
            </section>
            {/* <!-- End Video One --> <span className="fa fa-play"><i className="ripple"></i></span> style={{ backgroundImage: `url(${BG2})` }}*/}
        </>
    )
}