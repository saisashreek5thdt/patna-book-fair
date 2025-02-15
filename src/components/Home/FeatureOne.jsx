const pattern7 = "assets/images/background/pattern-7.png";
const pattern8 = "assets/images/background/pattern-8.png";
const pattern9 = "assets/images/background/pattern-9.png";

export default function FeatureOne() {
    const cards = [
        {
            icon: "flaticon-policy",
            title: "Speaker",
            link: "event-detail.html",
        },
        {
            icon: "flaticon-digital-learning",
            title: "Author",
            link: "event-detail.html",
        },
        {
            icon: "flaticon-conversation-1",
            title: "Sponsor's",
            link: "event-detail.html",
        },
        {
            icon: "flaticon-inspiration",
            title: "Vendor",
            link: "event-detail.html",
        },
    ];

    return (
        <>
            <section className="feature-one">
                <div className="feature-one_pattern" style={{ backgroundImage: `url(${pattern7})` }}></div>
                <div className="feature-one_pattern-two" style={{ backgroundImage: `url(${pattern8})` }}></div>
                <div className="feature-one_pattern-three" data-parallax='{"y" : 80}' style={{ backgroundImage: `url(${pattern9})` }}></div>
                <div className="auto-container">
                    <div className="sec-title title-anim">
                        <div className="sec-title_title">Our Features</div>
                        <h2 className="sec-title_heading">Features For Client</h2>
                    </div>
                    {/* Scroll wrapper for auto-scroll */}
                    <div className="row clearfix">
                        <div className="scroll-wrapper">
                            {/* First set of cards */}
                            {cards.map((card, index) => (
                                <div key={index} className="feature-block_one col-lg-3 col-md-6 col-sm-12">
                                    <div className="feature-block_one-inner wow fadeInUp" data-wow-delay={`${index * 150}ms`} data-wow-duration="1500ms">
                                        <div className={`feature-block_one-icon ${card.icon}`}></div>
                                        <h4 className="feature-block_one-title"><a href={card.link}>{card.title}</a></h4>
                                        <a className="feature-block_one-more" href={card.link}>Read More</a>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate set of cards for seamless looping */}
                            {cards.map((card, index) => (
                                <div key={index + cards.length} className="feature-block_one col-lg-3 col-md-6 col-sm-12">
                                    <div className="feature-block_one-inner wow fadeInUp" data-wow-delay={`${index * 150}ms`} data-wow-duration="1500ms">
                                        <div className={`feature-block_one-icon ${card.icon}`}></div>
                                        <h4 className="feature-block_one-title"><a href={card.link}>{card.title}</a></h4>
                                        <a className="feature-block_one-more" href={card.link}>Read More</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}